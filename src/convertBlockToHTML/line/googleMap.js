const { iframe } = require('../../lib/html')

module.exports = ({ latitude, longitude, zoom, place }) => {
  return iframe(
    '',
    {
      class: 'googlemap',
      src: `https://maps.google.co.jp/maps?output=embed&ll=${latitude},${longitude}&z=${zoom}&q=${encodeURIComponent(place)}`,
      width: 620,
      height: 450,
      frameborder: '0',
      allowfullscreen: ''
    }
  )
}
