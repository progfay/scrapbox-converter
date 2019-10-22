const { iframe } = require('../../../lib/html')

const youtubeRegExp = /^https?:\/\/(www\.)?youtube\.com\/watch\?v=(?<v>[\w-]+)(?<query>(&\w+=[^\s&]*)*)$/
const shortYoutubeRegExp = /^https?:\/\/youtu\.be\/(?<v>[\w-]+)(\?(?<query>\w+=[^\s&](&\w+=[^\s&]*)*))?$/

const params = query => query
  .split('&')
  .map(str => {
    const [key, ...value] = str.split('=')
    return [key, value.join('=')]
  })

const seconds = t => {
  if (!t) return 0
  if (/^\d+$/.test(t)) return parseInt(t)

  const match = t.match(/^(?<hours>(\d+)h)?((?<minutes>\d+)m)?((?<seconds>\d+)s)?$/)
  if (!match) return 0

  const { hours = 0, minutes = 0, seconds = 0 } = match.groups
  return 3600 * parseInt(hours) + 60 * parseInt(minutes) + parseInt(seconds)
}

module.exports = ({ href, content }) => {
  const match = href.match(youtubeRegExp) || href.match(shortYoutubeRegExp)
  if (!match) return null

  const { v, query } = match.groups
  const { t } = Object.fromEntries(params(query))

  return iframe(
    '',
    {
      width: 640,
      height: 360,
      src: `http://www.youtube.com/embed/${v}`,
      start: seconds(t),
      frameborder: 0
    }
  )
}
