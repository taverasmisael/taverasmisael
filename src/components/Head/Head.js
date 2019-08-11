import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

const Head = ({ title, description, metaImage, keywords, path, isPost }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          siteUrl
          title
          description
        }
      }
    }
  `)

  const pageTitle = `${title || 'Inicio'} | ${siteMetadata.title}`
  const pageDescription = description || siteMetadata.description
  const pageImage = `${siteMetadata.siteUrl}${metaImage || '/metaimage.png'}`
  const pageKeywords = keywords || siteMetadata.keywords
  const pageURL = `${siteMetadata.siteUrl}${path || ''}`
  return (
    <Helmet>
      <html lang="es" />
      <title>{pageTitle}</title>
      <meta title="author" content={siteMetadata.author} />
      <meta name="title" content={pageTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={pageKeywords} />
      <meta name="theme-color" content="#293462" />

      <meta property="og:type" content={isPost ? 'article' : 'website'} />
      <meta property="og:url" content={pageURL} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={pageURL} />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={pageDescription} />
      <meta property="twitter:image" content={pageImage} />
    </Helmet>
  )
}

export default Head
