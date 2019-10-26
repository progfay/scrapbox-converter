/* global describe it expect */

import { parse } from '@progfay/scrapbox-parser'
import convert from '../src'
import pretty from 'pretty'

describe('table', () => {
  it('Simple table', () => {
    const input = `Table
table:hello
  1	2	3
  1 	2 	3
  ------	------	------
  a	b	c`
    const html = convert(parse(input), 'projectName')
    expect(pretty(html)).toMatchSnapshot()
  })
})
