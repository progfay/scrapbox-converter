import { pragma } from 'amphtml-tsx'
import { StrongIconNodeType } from '@progfay/scrapbox-parser'
import { NodeConverterType } from '.'

const StrongIconNodeConverter: NodeConverterType<StrongIconNodeType> = ({ pathType, path }, projectName) => (
  <amp-img
    src={`https://scrapbox.io/api/pages${pathType === 'root' ? path : `/${projectName}/${path}`}/icon`}
    layout='fill'
    alt={'icon'}
    class={'strong-icon'} />
)

export default StrongIconNodeConverter
