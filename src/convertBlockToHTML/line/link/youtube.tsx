import { pragma } from 'amphtml-tsx'
import { SubNodeConverterType } from '../'
import { LinkNodeType } from './'

const youtubeRegExp = /^https?:\/\/(www\.)?youtube\.com\/watch\?v=(?<v>[\w-]+)(?<query>(&\w+=[^\s&]*)*)$/
const shortYoutubeRegExp = /^https?:\/\/youtu\.be\/(?<v>[\w-]+)(\?(?<query>\w+=[^\s&]*(&\w+=[^\s&]*)*))?$/

const params = (query: string): string[][] => (
  query
    .split('&')
    .map(str => {
      const [key, ...value] = str.split('=')
      return [key, value.join('=')]
    })
)

type YoutubeMatch = {
  groups: {
    v: string
    query: string | undefined
  }
}

const isYoutubeMatch = (obj: any): obj is YoutubeMatch => {
  return (typeof obj?.groups?.v) === 'string'
}

const seconds = (t: string): number => {
  if (/^\d+$/.test(t)) return parseInt(t, 10)

  const match = t.match(/^(?<hours>(\d+)h)?((?<minutes>\d+)m)?((?<seconds>\d+)s)?$/)
  if (!match || !match.groups) return 0

  const { hours = '0', minutes = '0', seconds = '0' } = match.groups
  return 3600 * parseInt(hours) + 60 * parseInt(minutes) + parseInt(seconds)
}

const YoutubeConverter: SubNodeConverterType<LinkNodeType> = (linkNode: LinkNodeType) => {
  const { href } = linkNode
  const match = href.match(youtubeRegExp) || href.match(shortYoutubeRegExp)
  if (!isYoutubeMatch(match)) return null

  const { v, query = '' } = match.groups
  const t = (params(query).find(param => param[0] === 't') || [])[1] || '0'

  return (
    <amp-youtube
      data-videoid={v}
      layout="responsive"
      width="480" height="270"
      data-param-start={seconds(t)} />
  )
}

export default YoutubeConverter
