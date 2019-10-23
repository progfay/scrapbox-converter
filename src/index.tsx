import packBlocksToSections from './packBlocksToSections'
import convertSectionToHTML from './convertSectionToHTML'
import escapeHTMLSpecialChars from './lib/escapeHTMLSpecialChars'
import pragma from './lib/pragma'

const convert = ({ title, blocks }, projectName) => (
  <article>
    <h1 class="title">
      {escapeHTMLSpecialChars(title)}
    </h1>
    {
      packBlocksToSections(blocks).map(section => (
        <section>
          {convertSectionToHTML(section, projectName)}
        </section>
      ))
    }
  </article>
)

export default convert
