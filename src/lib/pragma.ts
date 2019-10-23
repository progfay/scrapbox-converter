declare global {
  namespace JSX {
    interface IntrinsicElements {
        [elemName: string]: AttributesType | {};
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

export default (tagName: string, attributes: AttributesType | null, ...innerHTMLs: any[]): string =>
  `<${tagName}${attributes ? ` ${renderAttributes(attributes)}` : ''}>${innerHTMLs.map((innerHTML = '') => Array.isArray(innerHTML) ? innerHTML.join('') : innerHTML.toString()).join('')}</${tagName}>`
