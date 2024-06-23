import React, { useState, useCallback } from "react";
import * as prod from "react/jsx-runtime";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkCodeTitle from "remark-code-title";
import remarkGemoji from "remark-gemoji";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import remarkPlantuml from "@akebifiky/remark-simple-plantuml";
import rehypeFmt from "rehype-format";
import rehypeHighlight from "rehype-highlight";
import rehypeExternalLinks from "rehype-external-links";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import remarkBreaks from "remark-breaks";
import rehypeKatex from "rehype-katex";
import rehypeToc from "rehype-toc";
import rehypeSlug from "rehype-slug";
import rehypeParse from "rehype-parse";
import rehypeStringify from "rehype-stringify";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import * as remarkCodeExtra from "remark-code-extra";
import * as remarkCodeFrontmatter from "remark-code-frontmatter";
import type { Options as RehypeReactOptions } from "rehype-react";
import rehypeReact from "rehype-react";
import { unified } from "unified";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import CustomImage from "./CustomImage";
import CustomLink from "./CustomLink";

const sanitizeSchema = {
  ...defaultSchema,
  attributes: {
    ...defaultSchema.attributes,
    p: [
      ...(defaultSchema.attributes?.div || []),
      ["className", "remark-code-title"],
    ],
    div: [
      ...(defaultSchema.attributes?.div || []),
      [
        "className",
        "math",
        "math-display",
        "toc",
        "data-remark-code-title",
        "remark-code-title",
      ],
    ],
    span: [
      ...(defaultSchema.attributes?.span || []),
      [
        "className",
        "math",
        "math-inline",
        "katex",
        "katex-mathml",
        "katex-html",
        "toc",
      ],
    ],
    code: [
      ...(defaultSchema.attributes?.code || []),
      [
        "className",
        "hljs",
        "hljs-addition",
        "hljs-attr",
        "hljs-attribute",
        "hljs-built_in",
        "hljs-bullet",
        "hljs-char",
        "hljs-code",
        "hljs-comment",
        "hljs-deletion",
        "hljs-doctag",
        "hljs-emphasis",
        "hljs-formula",
        "hljs-keyword",
        "hljs-link",
        "hljs-literal",
        "hljs-meta",
        "hljs-name",
        "hljs-number",
        "hljs-operator",
        "hljs-params",
        "hljs-property",
        "hljs-punctuation",
        "hljs-quote",
        "hljs-regexp",
        "hljs-section",
        "hljs-selector-attr",
        "hljs-selector-class",
        "hljs-selector-id",
        "hljs-selector-pseudo",
        "hljs-selector-tag",
        "hljs-string",
        "hljs-strong",
        "hljs-subst",
        "hljs-symbol",
        "hljs-tag",
        "hljs-template-tag",
        "hljs-template-variable",
        "hljs-title",
        "hljs-type",
        "hljs-variable",
      ],
    ],
  },
};
// remark形式変換 > remark関連のPlugin適用 > rehype変換 > rehype関連のPlugin適用 >
// md to html
const preprocessor = unified()
  .use(remarkParse)
  .use(remarkCodeFrontmatter)
  .use(remarkCodeExtra, {
    transform: (node: any) =>
      node.frontmatter.before || node.frontmatter.after
        ? {
            before: node.frontmatter.before && [
              {
                type: "text",
                value: node.frontmatter.before,
              },
            ],
            after: node.frontmatter.after && [
              {
                type: "text",
                value: node.frontmatter.after,
              },
            ],
          }
        : null,
  })
  .use(remarkBreaks)
  .use(remarkGemoji)
  .use(remarkGfm)
  .use(remarkMath)
  .use(remarkPlantuml)
  .use(remarkCodeTitle)
  .use(remarkRehype)
  .use(rehypeHighlight)
  .use(rehypeExternalLinks, { rel: ["ugc"] })
  .use(rehypeFmt)
  .use(rehypeKatex)
  .use(rehypeSlug)
  .use(rehypeToc)
  .use(rehypeAutolinkHeadings, {
    behavior: "wrap",
  })
  .use(rehypeStringify);

const processor = unified()
  .use(rehypeParse, { fragment: true })
  .use(rehypeSanitize, sanitizeSchema as any)
  .use(rehypeReact, {
    Fragment: prod.Fragment,
    jsx: prod.jsx,
    jsxs: prod.jsxs,
    createElement: React.createElement,
    components: {
      a: CustomLink,
      img: CustomImage,
    },
    passNode: true,
  } as RehypeReactOptions);

const MdContent = ({ content }: { content: string }) => {
  const [processedContent, setProcessedContent] = useState<any>("");
  const handler = useCallback(
    () =>
      preprocessor.process(content).then((res) =>
        processor.process(res.value).then((res) => {
          setProcessedContent(res.value);
        }),
      ),
    [content],
  );
  handler();
  return (
    <Grid direction="column" sx={{ flexGrow: 1 }}>
      {processedContent !== "" && (
        <Typography
          sx={{ fontSize: "1.1rem" }}
          color="text.secondary"
          dangerouslySetInnerHTML={{ __html: processedContent }}
        ></Typography>
      )}
    </Grid>
  );
};

export default MdContent;
