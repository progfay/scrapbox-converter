/* global describe it expect */

import { parse } from '@progfay/scrapbox-parser'
import convert from '../../src'
import pretty from 'pretty'

describe('image', () => {
  it('Simple image', () => {
    const input = `Image
[https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png]`
    const html = convert(parse(input), 'projectName')
    expect(pretty(html)).toMatchSnapshot()
  })

  it('Image with link', () => {
    const input = `Image
[http://cutedog.com https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png]`
    const html = convert(parse(input), 'projectName')
    expect(pretty(html)).toMatchSnapshot()
  })

  it('Simple gyazo', () => {
    const input = `Image
[https://gyazo.com/da78df293f9e83a74b5402411e2f2e01]`
    const html = convert(parse(input), 'projectName')
    expect(pretty(html)).toMatchSnapshot()
  })

  it('Gyazo with link', () => {
    const input = `Image
[http://cutedog.com https://gyazo.com/da78df293f9e83a74b5402411e2f2e01]`
    const html = convert(parse(input), 'projectName')
    expect(pretty(html)).toMatchSnapshot()
  })
})
