import { useStaticQuery, graphql } from 'gatsby'

export const useSiteTitle = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return data.site.siteMetadata.title
}
