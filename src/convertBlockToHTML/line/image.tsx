import { ImageNodeType } from '@progfay/scrapbox-parser'
import pragma from '../../lib/pragma'
import { NodeConverterType } from '.'

const ImageNodeConverter: NodeConverterType<ImageNodeType> = ({ src }) => (
  <img
    src={src}
    alt='image'
    class='normal-image' />
)

export default ImageNodeConverter
