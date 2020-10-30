import React from 'react'
import _ from 'lodash'
import Paginate from './pagination/Paginate'
import NewsContainer from './news/NewsContainer';

const NewsTemplate = ({ loading, pathContext }) => {
  if (loading) {
    return null
  } else {

    console.log(_.get(pathContext, 'group'))

    return (
      <div>
        <NewsContainer
          category={_.get(pathContext, 'additionalContext.category')}
          news={_.get(pathContext, 'group')}
          renderPaginate={<Paginate pathContext={pathContext} />}
        />
      </div>
    )
  }
}

export default NewsTemplate

export const newsQuery = graphql`
  query NewsQuery($category: String) {
    allWordpressWpNews(filter: { categories: { slug: { eq: $category } } }) {
      edges {
        node {
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
    }
  }
`
