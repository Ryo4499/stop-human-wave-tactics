"""Integration checks against the local Compose runner and its real PostgreSQL."""

import json
import os
import unittest
from urllib.request import Request, urlopen
from uuid import uuid4


@unittest.skipUnless(
    os.environ.get("TEST_API_URL") and os.environ.get("ADMIN_TOKEN"),
    "Set TEST_API_URL and ADMIN_TOKEN for the local Compose runner",
)
class LocalApiTests(unittest.TestCase):
    def query(self, query, variables=None, authenticated=True):
        headers = {"Content-Type": "application/json"}
        if authenticated:
            headers["Authorization"] = "Bearer " + os.environ["ADMIN_TOKEN"]
        request = Request(
            os.environ["TEST_API_URL"] + "/graphql",
            data=json.dumps({"query": query, "variables": variables or {}}).encode(),
            headers=headers,
        )
        with urlopen(request, timeout=10) as response:
            return json.load(response)

    def test_article_lifecycle_and_authorization(self):
        slug = "integration-" + uuid4().hex
        mutation = (
            'mutation($slug:String!){createCategory(name:"Integration",slug:$slug){id}}'
        )
        denied = self.query(mutation, {"slug": slug}, authenticated=False)
        self.assertIn("errors", denied)
        category = self.query(mutation, {"slug": slug})["data"]["createCategory"]["id"]
        create = """mutation($input:ArticleInput!){createArticle(input:$input){id}}"""
        result = self.query(
            create,
            {
                "input": {
                    "slug": slug,
                    "locale": "ja",
                    "content": slug,
                    "publishedAt": "2024-01-01T00:00:00Z",
                    "categoryId": category,
                    "seo": {"metaTitle": slug},
                }
            },
        )
        self.assertNotIn("errors", result)
        article = result["data"]["createArticle"]["id"]
        try:
            search = """query($filter:ArticleFilterInput!){articles(filter:$filter){items{id content}pageInfo{totalItems}}}"""
            found = self.query(
                search, {"filter": {"searchQuery": slug}}, authenticated=False
            )
            self.assertEqual(found["data"]["articles"]["pageInfo"]["totalItems"], 1)
            updated = self.query(
                'mutation($id:ID!){updateArticle(id:$id,input:{content:"Updated"}){content}}',
                {"id": article},
            )
            self.assertEqual(updated["data"]["updateArticle"]["content"], "Updated")
            unpublished = self.query(
                "mutation($id:ID!){updateArticle(id:$id,input:{publishedAt:null}){publishedAt}}",
                {"id": article},
            )
            self.assertIsNone(unpublished["data"]["updateArticle"]["publishedAt"])
            hidden = self.query(
                search, {"filter": {"id": article}}, authenticated=False
            )
            self.assertEqual(hidden["data"]["articles"]["pageInfo"]["totalItems"], 0)
            invalid = self.query("{articles(pagination:{page:0,size:0}){items{id}}}")
            self.assertIn("errors", invalid)
        finally:
            deleted = self.query(
                "mutation($id:ID!){deleteArticle(id:$id)}", {"id": article}
            )
            self.assertTrue(deleted["data"]["deleteArticle"])


if __name__ == "__main__":
    unittest.main()
