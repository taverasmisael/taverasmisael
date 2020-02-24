import { siteUrl } from '../../config-gatsby/siteMetadata'
export const createCanonicalURL = url => encodeURI(`${siteUrl}${url}`)
