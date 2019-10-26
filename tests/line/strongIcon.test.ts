/* global describe it expect */

import { parse } from '@progfay/scrapbox-parser'
import convert from '../../src'
import pretty from 'pretty'

describe('strongIcon', () => {
  it('Simple strongIcon', () => {
    const input = `Strong Icon
[[progfay.icon]]`
    const html = convert(parse(input), 'projectName')
    expect(pretty(html)).toMatchSnapshot()
  })

  it('Root strongIcon', () => {
    const input = `Strong Icon
[[/icons/hr.icon]]`
    const html = convert(parse(input), 'projectName')
    expect(pretty(html)).toMatchSnapshot()
  })
})
