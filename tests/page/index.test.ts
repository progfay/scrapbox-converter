/* global describe it expect */

import * as fs from 'fs'
import { parse as parseScrapbox } from '@progfay/scrapbox-parser'
import convert from '../../src'
import pretty from 'pretty'

describe('Page', () => {
  it('Sample page', () => {
    const page = fs.readFileSync('./tests/page/input.txt').toString()
  const html = convert(parseScrapbox(page), 'projectName')
  expect(pretty(html)).toMatchSnapshot()
  })
})
