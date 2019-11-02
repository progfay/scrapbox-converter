import { pragma } from 'amphtml-tsx'
import { TableType } from '@progfay/scrapbox-parser'
import { BlockConverterType } from '.'

const TableBlockConverter: BlockConverterType<TableType> = ({ cells }, projectName) => (
  <table>
    {
      cells.map(
        (row, index) => (
          <tr>
            {
              row.map(cell => (
                index === 0
                  ? (<th>{cell.map(node => require('./line').nodeConverter(node, projectName))}</th>)
                  : (<td>{cell.map(node => require('./line').nodeConverter(node, projectName))}</td>)
              )
              )
            }
          </tr>
        )
      )
    }
  </table>
)

export default TableBlockConverter
