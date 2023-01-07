import { remark } from 'remark'
import html from 'remark-html'
import remarkGfm from 'remark-gfm'
import rehypeExternalLinks from 'rehype-external-links'

export default async function markdownToHtml(markdown) {
  const result = await remark()
    .use(html)
    .use(remarkGfm) // Added to enable tables with Remark Markdown
    .use(rehypeExternalLinks, {rel: ['nofollow']}, {target: ['_blank']}) // Added to set targeting for external links
    .process(markdown) 
  return result.toString()
}