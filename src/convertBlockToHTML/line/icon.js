module.exports = ({ path, pathType }, projectName) => {
  const src = `https://scrapbox.io/api/pages${pathType === 'root' ? path : `/${projectName}/${path}`}/icon`
  return `<img src="${src}" alt="icon" class="normal-icon" />`
}
