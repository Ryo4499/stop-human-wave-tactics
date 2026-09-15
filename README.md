# Stop Human Wave Tactics

Legacy portfolio application: Next.js Pages Router with Material UI, FastAPI/Strawberry
GraphQL and PostgreSQL. The original Strapi backend is replaced by FastAPI.
The current runner is local-only; it does not deploy to a public host.

## Local Docker runner

Run from the directory containing this README with Docker Compose installed.
Create local credentials once (the ignored `.env.local` file must not be committed):

```bash
umask 077
printf 'POSTGRES_PASSWORD=%s\nADMIN_TOKEN=%s\n' \
  "$(openssl rand -hex 24)" "$(openssl rand -hex 32)" > .env.local
```

Start the application:

```bash
docker compose --env-file .env.local -f compose.local.yml up --build -d
```

The site is at `http://localhost:13000`; the API health endpoint is
`http://localhost:18000/health`, and the GraphQL IDE is at
`http://localhost:18000/graphql`. Only loopback ports are published. Articles,
search, categories and tags use the FastAPI GraphQL contract. PostgreSQL data
persists in the Compose project volume across restarts.

The front container runs Next.js in development mode for local exploration.
The original `compose.yml` is retained as historical deployment configuration;
it includes host-monitoring mounts and is not the local runner.

## Content management

The Strapi administrator UI is no longer used. Manage content in the GraphQL IDE
with its Headers editor, setting `Authorization` to `Bearer <ADMIN_TOKEN>` using
the token generated in `.env.local`. Never add it to a browser URL or source file.
Mutations reject missing or incorrect tokens; public queries need no token.
This local token is not a multi-user authentication system.

Create a category first:

```graphql
mutation {
  createCategory(name: "Development", slug: "development") { id }
}
```

Use the returned category ID as `categoryId` when creating an article:

```graphql
mutation {
  createArticle(input: {
    slug: "first-article"
    locale: "ja"
    content: "# First article"
    publishedAt: "2024-01-01T00:00:00Z"
    categoryId: "<CATEGORY_ID>"
    seo: {metaTitle: "First article"}
  }) { id slug }
}
```

`updateArticle`, `deleteArticle` and `createTag` are also available in the IDE.
Articles with no publication date are drafts and do not appear in public lists.

## Verification

From this directory, set `TEST_API_URL` to the local API origin and supply
`ADMIN_TOKEN` from `.env.local` to run the real PostgreSQL-backed lifecycle check:

```bash
set -a
. ./.env.local
set +a
TEST_API_URL=http://localhost:18000 \
  python3 -m unittest discover \
  -s stop-human-wave-tactics-backend/tests -p test_local_api.py
```

Stop the task-owned containers without deleting persisted data:

```bash
docker compose --env-file .env.local -f compose.local.yml down
```
