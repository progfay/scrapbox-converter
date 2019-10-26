/* global describe it expect */

import { parse } from '@progfay/scrapbox-parser'
import convert from '../../src'
import pretty from 'pretty'

describe('link', () => {
  it('Simple link', () => {
    const input = `Link
https://example.com`
    const html = convert(parse(input), 'projectName')
    expect(pretty(html)).toMatchSnapshot()
  })

  it('Link with content', () => {
    const input = `Link
[https://example.com example]`
    const html = convert(parse(input), 'projectName')
    expect(pretty(html)).toMatchSnapshot()
  })

  it('Relative link', () => {
    const input = `Link
[settings]`
    const html = convert(parse(input), 'projectName')
    expect(pretty(html)).toMatchSnapshot()
  })

  it('Root link', () => {
    const input = `Link
[/help/syntax]`
    const html = convert(parse(input), 'projectName')
    expect(pretty(html)).toMatchSnapshot()
  })
})
