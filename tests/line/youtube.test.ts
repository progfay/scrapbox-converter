/* global describe it expect */

import { parse } from '@progfay/scrapbox-parser'
import convert from '../../src'
import pretty from 'pretty'

describe('youtube', () => {
  it('Simple youtube', () => {
    const input = `Youtube
[https://www.youtube.com/watch?v=YJ5q8Wrkbdw]`
    const html = convert(parse(input), 'projectName')
    expect(pretty(html)).toMatchSnapshot()
  })

  it('Youtube with start time', () => {
    const input = `Youtube
[https://www.youtube.com/watch?v=YJ5q8Wrkbdw&t=8]
[https://www.youtube.com/watch?v=YJ5q8Wrkbdw&t=0h8s]`
    const html = convert(parse(input), 'projectName')
    expect(pretty(html)).toMatchSnapshot()
  })

  it('Short link youtube', () => {
    const input = `Youtube
[https://youtu.be/YJ5q8Wrkbdw]`
    const html = convert(parse(input), 'projectName')
    expect(pretty(html)).toMatchSnapshot()
  })

  it('Short link youtube with start time', () => {
    const input = `Youtube
[https://youtu.be/YJ5q8Wrkbdw?t=5]
[https://youtu.be/YJ5q8Wrkbdw?t=1m]`
    const html = convert(parse(input), 'projectName')
    expect(pretty(html)).toMatchSnapshot()
  })

  it('Invalid start time', () => {
    const input = `Youtube
[https://www.youtube.com/watch?v=YJ5q8Wrkbdw&t=hoge]`
    const html = convert(parse(input), 'projectName')
    expect(pretty(html)).toMatchSnapshot()
  })
})
