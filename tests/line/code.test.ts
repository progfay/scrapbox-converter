/* global describe it expect */

import { parse } from '@progfay/scrapbox-parser'
import convert from '../../src'
import pretty from 'pretty'

describe('code', () => {
  it('Simple code', () => {
    const input = `Code
\`code\``
    const html = convert(parse(input), 'projectName')
    expect(pretty(html)).toMatchSnapshot()
  })
})
