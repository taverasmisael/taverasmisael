import { siteUrl } from '../../site-metadata.json'
export const createCanonicalURL = url => encodeURI(`${siteUrl}${url}`)
