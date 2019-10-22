const { table, tr, th, td } = require('../lib/html')

module.exports = ({ cells }, projectName) => table(
  cells.map(
    (row, index) => tr(
      row.map(
        cell => (index === 0 ? th : td)(
          cell.map(
            node => require('./line').nodeConverter(node, projectName)
          ).join('')
        )
      ).join('')
    )
  ).join('')
)
