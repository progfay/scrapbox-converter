/* global describe it expect */

import { parse } from '@progfay/scrapbox-parser'
import convert from '../src'
import pretty from 'pretty'

describe('codeBlock', () => {
  it('Simple codeBlock', () => {
    const input = `Code Block
code:index.js
 function () {
   alert(document.location.href)
   console.log("hello")
   // You can also write comments!
 }`
    const html = convert(parse(input), 'projectName')
    expect(pretty(html)).toMatchSnapshot()
  })

  it('CodeBlock with not registered language', () => {
    const input = `Code Block
code:hoge
 this.language.is()`
    const html = convert(parse(input), 'projectName')
    expect(pretty(html)).toMatchSnapshot()
  })
})
