import React from 'react'
import NewsDetail from './news/NewsDetail'

const NewsDetailTemplate = ({ loading, data }) => {
  if (loading) {
    return null
  } else {
    return <NewsDetail news={_.get(data, 'wordpressWpNews')} />
  }
}

export default NewsDetailTemplate

export const currentNews = graphql`
  query currentNewsQuery($slug: String) {
    wordpressWpNews(slug: { eq: $slug }) {
      id
      slug
      title
      modified
      categories {
        slug
      }
      acf {
        thumbnail_image {
          source_url
        }
        short_description
        content
      }
    }
  }
`
