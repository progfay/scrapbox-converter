import { pragma } from 'amphtml-tsx'
import { GoogleMapNodeType } from '@progfay/scrapbox-parser'
import { NodeConverterType } from '.'

const GOOGLE_MAP_API_KEY = 'AIzaSyC2sPsKnxrPTmqLbqEK2SVOiVzSCyaDmGg'

const GoogleMapNodeConverter: NodeConverterType<GoogleMapNodeType> = ({ latitude, longitude, zoom, place }) => (
  <amp-iframe
    class='googlemap'
    width="620" height="450"
    sandbox="allow-scripts allow-same-origin"
    layout="responsive"
    frameborder="0"
    src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAP_API_KEY}&ll=${latitude},${longitude}&z=${zoom}&q=${encodeURIComponent(place)}`} />
)

export default GoogleMapNodeConverter
