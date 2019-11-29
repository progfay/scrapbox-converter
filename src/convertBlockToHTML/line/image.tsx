import { pragma } from 'amphtml-tsx'
import { ImageNodeType } from '@progfay/scrapbox-parser'
import { NodeConverterType } from '.'

const ImageNodeConverter: NodeConverterType<ImageNodeType> = ({ src }) => (
  <amp-img
    src={src}
    layout='intrinsic'
    height={360}
    width={640}
    alt='image'
    class='normal-image' />
)

export default ImageNodeConverter
