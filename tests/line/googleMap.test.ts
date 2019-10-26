/* global describe it expect */

import { parse } from '@progfay/scrapbox-parser'
import convert from '../../src'
import pretty from 'pretty'

describe('googleMap', () => {
  it('Simple googleMap', () => {
    const input = `Google Map
[N35.6972422,E139.7593459,Z17 明治大学]`
    const html = convert(parse(input), 'projectName')
    expect(pretty(html)).toMatchSnapshot()
  })
})
