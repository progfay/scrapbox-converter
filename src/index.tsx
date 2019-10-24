import { pragma } from 'html-tsx'
import { PageType } from '@progfay/scrapbox-parser'
import packBlocksToSections from './packBlocksToSections'
import convertSectionToHTML from './convertSectionToHTML'
import escapeHTMLSpecialChars from './lib/escapeHTMLSpecialChars'

const convert = (page: PageType, projectName: string) => (
  <article>
    <h1 class="title">
      {escapeHTMLSpecialChars(page.title)}
    </h1>
    {
      packBlocksToSections(page.blocks).map(section => (
        <section>
          {convertSectionToHTML(section, projectName)}
        </section>
      ))
    }
  </article>
)

export default convert
