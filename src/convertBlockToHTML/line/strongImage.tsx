import { pragma } from 'amphtml-tsx'
import { StrongImageNodeType } from '@progfay/scrapbox-parser'
import { NodeConverterType } from '.'

const StrongImageNodeConverter: NodeConverterType<StrongImageNodeType> = ({ src }) => (
  <amp-img
    src={src}
    layout='intrinsic'
    height={720}
    width={1280}
    alt={'image'}
    class={'strong-image'} />
)

export default StrongImageNodeConverter
