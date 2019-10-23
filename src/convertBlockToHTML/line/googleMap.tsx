import { GoogleMapNodeType } from '@progfay/scrapbox-parser'
import pragma from '../../lib/pragma'
import { NodeConverterType } from '.'

const GoogleMapNodeConverter: NodeConverterType<GoogleMapNodeType> = ({ latitude, longitude, zoom, place }) => (
  <iframe
    class='googlemap'
    src={`https://maps.google.co.jp/maps?output=embed&ll=${latitude},${longitude}&z=${zoom}&q=${encodeURIComponent(place)}`}
    width={620}
    height={450}
    frameborder={0}
    allowfullscreen />
)

export default GoogleMapNodeConverter
