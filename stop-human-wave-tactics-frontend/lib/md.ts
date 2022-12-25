import { Article } from './../types/apollo_client';
import { remark } from "remark";
import sanitizeHtml from 'sanitize-html';
import html from "remark-html";

/**
 * Markdown を解析して HTML にして返す
 * @param markdown Markdown ファイル名
 * @returns HTML
 */
const markdownToHtml = async (markdown: string) => {
    const result = await remark().use(html).process(markdown);
    return result.toString();
};

const sanitizeContent = async (dirty_content: string) => {
    const allow_elm = {
        a: [
            'id',
            'class',
            'href',
            'target',
            'rel'
        ],
        h1: ['id', 'class'],
        h2: ['id', 'class'],
        h3: ['id', 'class'],
        h4: ['id', 'class'],
        h5: ['id', 'class'],
        h6: ['id', 'class'],
        p: ['id', 'class', 'style'],
        span: ['id', 'class'],
        br: ['class'],
        img: ['id', 'class', 'src', 'alt', 'width', 'height'],
        pre: ['*'],
        code: ['*'],
        div: ['id', 'class', 'style'],
    }
    return await sanitizeHtml(dirty_content, { allowedAttributes: allow_elm, allowedTags: false })
}


const conv_md = async (article: Article) => {
    return sanitizeContent(await markdownToHtml(article.content)).then(res => { return res })
}

export default conv_md;