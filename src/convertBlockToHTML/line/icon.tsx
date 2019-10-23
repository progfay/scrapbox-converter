import { IconNodeType } from '@progfay/scrapbox-parser'
import pragma from '../../lib/pragma'
import { NodeConverterType } from '.'

const IconNodeConverter: NodeConverterType<IconNodeType> = ({ path, pathType }, projectName: string) => (
  <img
    src={`https://scrapbox.io/api/pages${pathType === 'root' ? path : `/${projectName}/${path}`}/icon`}
    alt={'icon'}
    class={'normal-icon'} />
)

export default IconNodeConverter
