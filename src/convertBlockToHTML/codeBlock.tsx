import { pragma } from 'amphtml-tsx'
import { highlight, highlightAuto, listLanguages, getLanguage } from 'highlight.js'
import { BlockConverterType } from '.'
import { CodeBlockType } from '@progfay/scrapbox-parser'

const customAlias = {
  scss: 'css',
  less: 'css',
  arduino: 'c++',
  ino: 'c++',
  processing: 'java',
  pde: 'java',
  kt: 'kotlin',
  tsx: 'typescript',
  svg: 'xml'
}

const languageMap = new Map<string, string>([
  ...listLanguages().flatMap((language): [string, string][] => [
    [language, language],
    ...(getLanguage(language).aliases?.map((alias): [string, string] => [alias, language]) ?? [])
  ]),
  ...Object.entries(customAlias)
])

const CodeBlockConverter: BlockConverterType<CodeBlockType> = ({ fileName, content }) => {
  const match = fileName.match(/(?<=\.)[^.]+$/)
  const language = languageMap.get(match ? match[0] : fileName)
  const highlightedCode = (language ? highlight(language, content, true) : highlightAuto(content)).value

  return (
    <pre>
      <code>
        {highlightedCode}
      </code>
    </pre>
  )
}

export default CodeBlockConverter
