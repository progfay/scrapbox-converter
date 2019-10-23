import blank from './blank'
import code from './code'
import decoration from './decoration'
import formula from './formula'
import googleMap from './googleMap'
import hashTag from './hashTag'
import icon from './icon'
import image from './image'
import link from './link'
import plain from './plain'
import strong from './strong'
import strongIcon from './strongIcon'
import strongImage from './strongImage'
import quote from './quote'

const Converter = {
  blank,
  code,
  decoration,
  formula,
  googleMap,
  hashTag,
  icon,
  image,
  link,
  plain,
  strong,
  strongIcon,
  strongImage,
  quote
}

export const nodeConverter = (node, projectName) => Converter[node.type](node, projectName)

export default ({ nodes }, projectName) => nodes
  .map(node => nodeConverter(node, projectName))
  .join('')
