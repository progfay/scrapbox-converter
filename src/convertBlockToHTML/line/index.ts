import { LineNodeType, LineType } from '@progfay/scrapbox-parser'
import { BlockConverterType } from '../'
import blank from './blank'
import code from './code'
import decoration from './decoration'
import formula from './formula'
import googleMap from './googleMap'
import hashTag from './hashTag'
import helpfeel from './helpfeel'
import icon from './icon'
import image from './image'
import link from './link'
import plain from './plain'
import strong from './strong'
import strongIcon from './strongIcon'
import strongImage from './strongImage'
import quote from './quote'

export type NodeConverterType<T extends LineNodeType> = (node: T, projectName: string) => string

const Converter: { [type in LineNodeType['type']]: NodeConverterType<any> } = {
  blank,
  code,
  decoration,
  formula,
  googleMap,
  hashTag,
  helpfeel,
  icon,
  image,
  link,
  plain,
  strong,
  strongIcon,
  strongImage,
  quote
}

export const nodeConverter = (node: LineNodeType, projectName: string) => Converter[node.type](node, projectName)

const LineBlockConverter: BlockConverterType<LineType> = ({ nodes }, projectName) => (
  nodes
    .map(node => nodeConverter(node, projectName))
    .join('')
)

export default LineBlockConverter
