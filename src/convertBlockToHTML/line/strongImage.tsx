import { pragma } from 'amphtml-tsx'
import { StrongImageNodeType } from '@progfay/scrapbox-parser'
import { NodeConverterType } from '.'

const StrongImageNodeConverter: NodeConverterType<StrongImageNodeType> = ({ src }) => (
  <img
    src={src}
    alt={'image'}
    class={'strong-image'} />
)

export default StrongImageNodeConverter
