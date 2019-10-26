/* global describe it expect */

import { parse } from '@progfay/scrapbox-parser'
import convert from '../../src'
import pretty from 'pretty'

describe('formula', () => {
  it('Simple formula', () => {
    const input = `Formula
[$ \sum_{k=0}^N k^2 = \frac{1}{2}N(N + 1)]`
    const html = convert(parse(input), 'projectName')
    expect(pretty(html)).toMatchSnapshot()
  })
})
