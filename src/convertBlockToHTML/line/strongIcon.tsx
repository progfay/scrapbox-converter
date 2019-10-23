import pragma from '../../lib/pragma'

export default ({ path, pathType }, projectName) => (
  <img
    src={`https://scrapbox.io/api/pages${pathType === 'root' ? path : `/${projectName}/${path}`}/icon`}
    alt={'icon'}
    class={'strong-icon'} />
)
