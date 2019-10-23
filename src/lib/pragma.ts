declare global {
  namespace JSX {
    type IntrinsicElements = {
      [tagName in keyof ElementTagNameMap]: AttributesType
    }
  }
}

type AttributesType = {
  [key: string]: number | string | boolean
}

const renderAttributes = (attr: AttributesType): string => (
  Object
    .entries(attr)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ')
)

const renderInnerHTMLs = (innerHTMLs: (number | string | boolean)[]): string => (
  innerHTMLs.map(
    (innerHTML = '') => (
      Array.isArray(innerHTML)
        ? innerHTML.map(html => html.toString()).join('')
        : innerHTML.toString()
    )
  ).join('')
)

export default (tagName: string, attributes: AttributesType | null, ...innerHTMLs: any[]): string =>
  `<${tagName}${attributes ? ` ${renderAttributes(attributes)}` : ''}>${renderInnerHTMLs(innerHTMLs)}</${tagName}>`
