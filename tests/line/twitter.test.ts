/* global describe it expect */

import { parse } from '@progfay/scrapbox-parser'
import convert from '../../src'
import pretty from 'pretty'

describe('twitter', () => {
  it('Simple twitter', () => {
    const input = `Twitter
[https://twitter.com/progfay/status/1190909733885972481]`
    const html = convert(parse(input), 'projectName')
    expect(pretty(html)).toMatchSnapshot()
  })

  it('Twitter link with statuses', () => {
    const input = `Twitter
[https://twitter.com/progfay/statuses/1190909733885972481]`
    const html = convert(parse(input), 'projectName')
    expect(pretty(html)).toMatchSnapshot()
  })
})
