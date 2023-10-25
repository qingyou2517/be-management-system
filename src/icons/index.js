import SvgIcon from '@/components/SvgIcon'

const svgRequired = require.context('./svg', false, /\.svg$/)
svgRequired.keys().forEach((fileName) => svgRequired(fileName))

export default (app) => {
  app.component('svg-icon', SvgIcon)
}
