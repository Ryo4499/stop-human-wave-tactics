import React from "react";
import * as prod from 'react/jsx-runtime'
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
import { attacher as remarkCodeExtra } from "remark-code-extra";
import { attacher as remarkCodeFrontmatter } from "remark-code-frontmatter";
import type { Options as RehypeReactOptions } from "rehype-react";
import rehypeReact from "rehype-react";
import { unified } from "unified";
import Grid from "@mui/material/Unstable_Grid2"
import Typography from "@mui/material/Typography";
import CustomImage from "./CustomImage";
import CustomLink from "./CustomLink";

// remark形式変換 > remark関連のPlugin適用 > rehype変換 > rehype関連のPlugin適用 >
// md to html
const preprocessor = (content: string) => unified()
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
    .use(rehypeHighlight, {
        ignoreMissing: true,
    })
    .use(rehypeExternalLinks, {
        rel: ["nofollow"],
    })
    .use(rehypeFmt)
    .use(rehypeToc)
    .use(rehypeKatex)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, {
        behavior: "warp"
    })
    .use(rehypeStringify)
    .processSync(content).toString()

const processor = (content: string): React.ReactElement<unknown, string | React.JSXElementConstructor<any>> => unified()
    .use(rehypeParse, { fragment: true })
    .use(rehypeReact, {
        Fragment: prod.Fragment,
        jsx: prod.jsx,
        jsxs: prod.jsxs,
        createElement: React.createElement,
        components: {
            a: CustomLink,
            img: CustomImage,
        },
        passNode: true
    } as RehypeReactOptions)
    .processSync(content).toString()

const MdContent = ({ content }: { content: string }) => {
    const sanitizeSchema = {
        ...defaultSchema,
        attributes: {
            ...defaultSchema.attributes,
            div: [
                ...(defaultSchema.attributes?.div || []),
                ["className", "math", "math-display", "toc"],
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
                ...(defaultSchema.attributes.code || []),
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


    const result_pre = preprocessor(content)
    const result = processor(result_pre)

    return <Grid direction="column" container sx={{ flexGrow: 1 }}>
        <Typography variant="body1" color="text.secondary" dangerouslySetInnerHTML={{ __html: result }}>
        </Typography>
    </Grid >
}

export default MdContent