/* global describe it expect */

import { parse } from '@progfay/scrapbox-parser'
import convert from '../../src'
import pretty from 'pretty'

describe('indent', () => {
  it('Simple indent', () => {
    const input = `Indent
${'\t'}level1
${'\t'}${'\t'}level2
${'\t'}${'\t'}${'\t'}level3
${'\t'}level1
${'\t'}${'\t'}${'\t'}level3
${'\t'}${'\t'}level2`
    const html = convert(parse(input), 'projectName')
    expect(pretty(html)).toMatchSnapshot()
  })
})
