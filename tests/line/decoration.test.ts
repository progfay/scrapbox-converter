/* global describe it expect */

import { parse } from '@progfay/scrapbox-parser'
import convert from '../../src'
import pretty from 'pretty'

describe('decoration', () => {
  it('Simple decoration', () => {
    const input = `Decoration
[*** deco-*-3]`
    const html = convert(parse(input), 'projectName')
    expect(pretty(html)).toMatchSnapshot()
  })

  it('Multi decoration', () => {
    const input = `Decoration
[/!_- deco-! deco-_ deco-- deco-/]`
    const html = convert(parse(input), 'projectName')
    expect(pretty(html)).toMatchSnapshot()
  })
})
