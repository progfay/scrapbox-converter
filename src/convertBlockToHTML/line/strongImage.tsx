import { pragma } from 'amphtml-tsx'
import { StrongImageNodeType } from '@progfay/scrapbox-parser'
import { NodeConverterType } from '.'

const StrongImageNodeConverter: NodeConverterType<StrongImageNodeType> = ({ src }) => (
  <amp-img
    src={src}
    layout='fill'
    alt={'image'}
    class={'strong-image'} />
)

export default StrongImageNodeConverter
