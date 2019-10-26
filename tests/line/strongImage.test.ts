/* global describe it expect */

import { parse } from '@progfay/scrapbox-parser'
import convert from '../../src'
import pretty from 'pretty'

describe('strongImage', () => {
  it('Simple strongImage', () => {
    const input = `Strong Image
[[https://gyazo.com/5593f3bbe109c38ebf07c16dd25dc4c4]]`
    const html = convert(parse(input), 'projectName')
    expect(pretty(html)).toMatchSnapshot()
  })
})
