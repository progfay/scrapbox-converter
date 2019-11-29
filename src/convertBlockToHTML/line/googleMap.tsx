import { pragma } from 'amphtml-tsx'
import { GoogleMapNodeType } from '@progfay/scrapbox-parser'
import { NodeConverterType } from '.'

const GOOGLE_MAP_API_KEY = 'AIzaSyC2sPsKnxrPTmqLbqEK2SVOiVzSCyaDmGg'

const GoogleMapNodeConverter: NodeConverterType<GoogleMapNodeType> = ({ latitude, longitude, zoom, place }) => (
  <amp-iframe
    class='googlemap'
    width={620} height={450}
    sandbox="allow-scripts allow-same-origin"
    layout="intrinsic"
    frameborder="0"
    src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAP_API_KEY}&center=${latitude},${longitude}&zoom=${zoom}&q=${encodeURIComponent(place)}`}>
    <amp-img
      src={`https://maps.googleapis.com/maps/api/staticmap?key=${GOOGLE_MAP_API_KEY}&center=${latitude},${longitude}&zoom=${zoom}&size=620x450`}
      placeholder
      layout='intrinsic'
      width={620} height={450}
      alt='image' />
  </amp-iframe>
)

export default GoogleMapNodeConverter
