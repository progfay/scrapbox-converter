import { TableType } from '@progfay/scrapbox-parser'
import pragma from '../lib/pragma'

export default (table: TableType, projectName: string) => (
  <table>
    {
      table.cells.map(
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
