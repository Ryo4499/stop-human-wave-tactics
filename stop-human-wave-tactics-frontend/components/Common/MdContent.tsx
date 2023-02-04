import React from "react";
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse/lib';
import remarkCodeTitle from "remark-code-title"
import remarkGemoji from "remark-gemoji"
import remarkMath from "remark-math"
import remarkRehype from 'remark-rehype'
import remarkUtf8 from "remark-utf8"
import remarkPlantuml from "@akebifiky/remark-simple-plantuml"
import rehypeFmt from "rehype-format"
import rehypeHighlight from "rehype-highlight"
import rehypeExternalLinks from 'rehype-external-links'
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import rehypeKatex from "rehype-katex"
import rehypeToc, { HtmlElementNode } from "rehype-toc"
import rehypeSlug from 'rehype-slug'
import rehypeParse from "rehype-parse"
import rehypeStringify from "rehype-stringify"
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeReact from "rehype-react"
import Grid from "@mui/material/Unstable_Grid2"
import { unified } from 'unified';
import CustomImage from "./CustomImage";
import CustomLink from "./CustomLink";

const sanitizeSchema = {
    ...defaultSchema,
    attributes: {
        ...defaultSchema.attributes,
        div: [
            ...(defaultSchema.attributes?.div || []),
            ['className', 'math', 'math-display']
        ],
        span: [
            ...(defaultSchema.attributes?.span || []),
            ['className', 'math', 'math-inline', "katex", "katex-mathml", "katex-html", 'hljs-addition', 'hljs-attr', 'hljs-attribute', 'hljs-built_in', 'hljs-bullet', 'hljs-char', 'hljs-code', 'hljs-comment', 'hljs-deletion', 'hljs-doctag', 'hljs-emphasis', 'hljs-formula', 'hljs-keyword', 'hljs-link', 'hljs-literal', 'hljs-meta', 'hljs-name', 'hljs-number', 'hljs-operator', 'hljs-params', 'hljs-property', 'hljs-punctuation', 'hljs-quote', 'hljs-regexp', 'hljs-section', 'hljs-selector-attr', 'hljs-selector-class', 'hljs-selector-id', 'hljs-selector-pseudo', 'hljs-selector-tag', 'hljs-string', 'hljs-strong', 'hljs-subst', 'hljs-symbol', 'hljs-tag', 'hljs-template-tag', 'hljs-template-variable', 'hljs-title', 'hljs-type', 'hljs-variable']
        ],
    }
}

// remark形式変換 > remark関連のPlugin適用 > rehype変換 > rehype関連のPlugin適用 > 
const processor = (content: string) => unified().use(remarkParse).use(remarkGemoji).use(remarkGfm).use(remarkUtf8).use(remarkMath).use(remarkPlantuml).use(remarkCodeTitle).use(remarkRehype).use(rehypeHighlight).use(rehypeExternalLinks, {
    rel: ['nofollow']
}).use(rehypeFmt).use(rehypeKatex).use(rehypeSlug).use(rehypeToc).use(rehypeAutolinkHeadings).use(rehypeStringify).processSync(content).value

// Nextのタグを使用したいので、変換
const parseReact = (content: string) => unified().use(rehypeParse, { fragment: true }).use(rehypeReact, {
    Fragment: React.Fragment,
    createElement: React.createElement,
    components: {
        a: CustomLink,
        img: CustomImage,
    },
    passNode: true,
} as any).processSync(content).result

const MdContent = ({ content }: { content: string }) => {
    return <Grid>
        {//parseReact(String(processor(content)))
        }
    </Grid >
}

export default MdContent