import { pragma } from 'html-tsx'
import { ImageNodeType } from '@progfay/scrapbox-parser'
import { NodeConverterType } from '.'

const ImageNodeConverter: NodeConverterType<ImageNodeType> = ({ src }) => (
  <img
    src={src}
    alt='image'
    class='normal-image' />
)

export default ImageNodeConverter
