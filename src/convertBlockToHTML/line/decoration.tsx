import { pragma } from 'amphtml-tsx'
import { DecorationType, DecorationNodeType } from '@progfay/scrapbox-parser'
import { NodeConverterType } from '.'

type DecorationClassType = string

const decoToClassMap: { [deco in DecorationType]?: DecorationClassType } = {
  _: 'underline',
  '-': 'line-through',
  '~': 'wavy',
  '.': 'dotted',
  '/': 'italic',
  '!': 'red',
  '*-1': 'bold',
  '*-2': 'big',
  '*-3': 'big',
  '*-4': 'big',
  '*-5': 'large',
  '*-6': 'large',
  '*-7': 'large',
  '*-8': 'huge',
  '*-9': 'huge',
  '*-10': 'huge'
  // '|': '',
  // '#': '',
  // '%': '',
  // '&': '',
  // '(': '',
  // ')': '',
  // '{': '',
  // '}': '',
  // '<': '',
  // '>': '',
  // ',': '',
  // '+': '',
  // '"': '',
  // '\'': ''
}

const DecorationConverter: NodeConverterType<DecorationNodeType> = ({ decos, nodes }, projectName: string): string => (
  <i class={Array.from(new Set(decos.map(deco => decoToClassMap[deco]).filter(Boolean))).join(' ')}>
    { nodes.map(node => require('./').nodeConverter(node, projectName)) }
  </i>
)

export default DecorationConverter
