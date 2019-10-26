/* global describe it expect */

import { parse } from '@progfay/scrapbox-parser'
import convert from '../../src'
import pretty from 'pretty'

describe('helpfeel', () => {
  it('Simple helpfeel', () => {
    const input = `Helpfeel
? Helpfeel notation`
    const html = convert(parse(input), 'projectName')
    expect(pretty(html)).toMatchSnapshot()
  })
})
