import { pragma } from 'html-tsx'
import { SubNodeConverterType } from '../'
import { LinkNodeType } from './'

const youtubeRegExp = /^https?:\/\/(www\.)?youtube\.com\/watch\?v=(?<v>[\w-]+)(?<query>(&\w+=[^\s&]*)*)$/
const shortYoutubeRegExp = /^https?:\/\/youtu\.be\/(?<v>[\w-]+)(\?(?<query>\w+=[^\s&](&\w+=[^\s&]*)*))?$/

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
    query: string
  }
}

const isYoutubeMatch = (obj: any): obj is YoutubeMatch => {
  return (
    !!obj && !!obj.groups &&
    typeof obj.groups.v === 'string' &&
    typeof obj.groups.query === 'string'
  )
}

const seconds = (t: string): number => {
  if (!t) return 0
  if (/^\d+$/.test(t)) return parseInt(t)

  const match = t.match(/^(?<hours>(\d+)h)?((?<minutes>\d+)m)?((?<seconds>\d+)s)?$/)
  if (!match || !match.groups) return 0

  const { hours = '0', minutes = '0', seconds = '0' } = match.groups
  return 3600 * parseInt(hours) + 60 * parseInt(minutes) + parseInt(seconds)
}

const YoutubeConverter: SubNodeConverterType<LinkNodeType> = (linkNode: LinkNodeType) => {
  const { href } = linkNode
  const match = href.match(youtubeRegExp) || href.match(shortYoutubeRegExp)
  if (!isYoutubeMatch(match)) return null

  const { v, query } = match.groups
  const t = (params(query).find(param => param[0] === 't') || [])[1] || '0'

  return (
    <iframe
      width={640}
      height={360}
      src={`http://www.youtube.com/embed/${v}`}
      start={seconds(t)}
      frameborder={0} />
  )
}

export default YoutubeConverter
