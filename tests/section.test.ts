/* global describe it expect */

import { parse } from '@progfay/scrapbox-parser'
import convert from '../src'
import pretty from 'pretty'

describe('Section', () => {
  it('Simple section', () => {
    const input = `Section
section 1
section 1
section 1

section 2

section 3
section 3`
    const html = convert(parse(input), 'projectName')
    expect(pretty(html)).toMatchSnapshot()
  })
})
