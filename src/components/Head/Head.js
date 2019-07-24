import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

const Head = ({ title, description }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          title
          description
        }
      }
    }
  `)
  return (
    <Helmet>
      <title>{`${title || 'Home'} | ${site.siteMetadata.title}`}</title>
      <meta
        name="description"
        content={description || site.siteMetadata.description}
      />
      <meta title="author" content={site.siteMetadata.author} />
    </Helmet>
  )
}

export default Head
