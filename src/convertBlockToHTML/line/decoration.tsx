import { DecorationNodeType } from '@progfay/scrapbox-parser'
import pragma from '../../lib/pragma'
import { NodeConverterType } from '.'

const DecorationConverter: NodeConverterType<DecorationNodeType> = ({ decos, nodes }, projectName: string): string => (
  <strong class={decos.map(deco => `deco-${deco}`).join(' ')}>
    { nodes.map(node => require('./').nodeConverter(node, projectName)) }
  </strong>
)

export default DecorationConverter
