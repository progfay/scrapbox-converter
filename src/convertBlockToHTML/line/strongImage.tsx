import { StrongImageNodeType } from '@progfay/scrapbox-parser'
import pragma from '../../lib/pragma'
import { NodeConverterType } from '.'

const StrongImageNodeConverter: NodeConverterType<StrongImageNodeType> = ({ src }) => (
  <img
    src={src}
    alt={'image'}
    class={'strong-image'} />
)

export default StrongImageNodeConverter
