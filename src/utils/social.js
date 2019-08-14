import { siteUrl } from '../../site-metadata.json'
export const createSocialShareURL = ({ url, title, text }) => {
  const canonicalURL = encodeURI(`${siteUrl}${url}`)

  let tweet = `${title}. ${text}`
  tweet = `${tweet.substring(0, 141)}...\n(Ver completo)`

  return {
    twitter: `https://twitter.com/intent/tweet?url=${canonicalURL}&text=${tweet}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${canonicalURL}&quote=${title}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${canonicalURL}&title=${title}`,
  }
}
