import { pragma } from 'amphtml-tsx'
import { SubNodeConverterType } from '../'
import { LinkNodeType } from './'

const twitterRegExp = /^https?:\/\/twitter\.com\/[^/]+\/status(es)?\/(?<status>\d+)$/

type TwitterMatch = {
  groups: {
    status: string
  }
}

const isTwitterMatch = (obj: any): obj is TwitterMatch => {
  return (
    !!obj && !!obj.groups &&
    typeof obj.groups.status === 'string'
  )
}

const TwitterConverter: SubNodeConverterType<LinkNodeType> = (linkNode: LinkNodeType) => {
  const { href } = linkNode
  const match = href.match(twitterRegExp)
  if (!isTwitterMatch(match)) return null

  const { status } = match.groups

  return (
    <amp-twitter width="375"
      height="472"
      layout="responsive"
      data-tweetid={status} />
  )
}

export default TwitterConverter
