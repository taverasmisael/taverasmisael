const {
  siteMetadata,
  seo,
  transformers,
  style,
  filesystem,
} = require('./config-gatsby')

module.exports = {
  siteMetadata,
  plugins: [...filesystem, ...style, ...transformers, ...seo],
}
