import ReactMarkdown from 'react-markdown'
import Image, { ImageLoaderProps } from "next/image"
import remarkGfm from 'remark-gfm';
import remarkHighlightjs from 'remark-highlight.js'
import remarkParse from 'remark-parse/lib';
import remarkHtml from 'remark-html';
import remarkStringify from 'remark-stringify'
import remarkCodeTitle from "remark-code-title"
import remarkGemoji from "remark-gemoji"
import remarkMath from "remark-math"
import remarkRehype from 'remark-rehype'
import ruby from 'remark-ruby';
import remarkToc from "remark-toc";
import rehypeSanitize from 'rehype-sanitize';
import rehypeKatex from "rehype-katex"
import "katex/dist/katex.css"
import "github-markdown-css/github-markdown-dark.css"
import "github-markdown-css/github-markdown-light.css"
import Container from "@mui/material/Container"

const loader = ({ src }: ImageLoaderProps): string => {
    return src
}

const components = {
    img: (props: any) =>
        <Container style={{ position: "relative" }}><Image loader={loader} src={props.node.properties.src} alt={props.alt} fill style={{ objectFit: "contain" }} /></Container>
};

const MdContent = ({ content }: { content: string }) => {
    const codeblocks = require('remark-code-blocks')
    const utf8 = require("remark-utf8")
    return <ReactMarkdown remarkPlugins={[utf8, codeblocks, remarkToc, ruby, remarkMath, remarkGemoji, remarkStringify, remarkGfm, remarkHighlightjs, remarkParse, remarkHtml, remarkCodeTitle, remarkRehype,]} rehypePlugins={[rehypeKatex, rehypeSanitize]} components={components} >{content}</ReactMarkdown>
    //return <ReactMarkdown >{content}</ReactMarkdown>
}

export default MdContent