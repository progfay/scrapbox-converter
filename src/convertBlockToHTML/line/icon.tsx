import { pragma } from 'amphtml-tsx'
import { IconNodeType } from '@progfay/scrapbox-parser'
import { NodeConverterType } from '.'

const IconNodeConverter: NodeConverterType<IconNodeType> = ({ path, pathType }, projectName: string) => (
  <amp-img
    src={`https://scrapbox.io/api/pages${pathType === 'root' ? path : `/${projectName}/${path}`}/icon`}
    layout='fill'
    alt={'icon'}
    class={'normal-icon'} />
)

export default IconNodeConverter
