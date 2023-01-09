import { unified } from 'unified'
import rehypeExternalLinks from 'rehype-external-links'

const file = await unified(markdown) 
  .use(rehypeExternalLinks, {target: ['_blank']}).process(markdown)