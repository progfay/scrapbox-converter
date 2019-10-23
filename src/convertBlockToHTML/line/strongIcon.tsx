import { StrongIconNodeType } from '@progfay/scrapbox-parser'
import pragma from '../../lib/pragma'
import { NodeConverterType } from '.'

const StrongIconNodeConverter: NodeConverterType<StrongIconNodeType> = ({ pathType, path }, projectName) => (
  <img
    src={`https://scrapbox.io/api/pages${pathType === 'root' ? path : `/${projectName}/${path}`}/icon`}
    alt={'icon'}
    class={'strong-icon'} />
)

export default StrongIconNodeConverter
