import React from 'react'
import _ from 'lodash'
import AdmissionContainer from './admission/AdmissionContainer'
import Paginate from './pagination/Paginate';

const AdmissionTemplate = ({ loading, pathContext }) => {
  if (loading) {
    return null
  } else {
    return (
      <div>
        <AdmissionContainer
          category={_.get(pathContext, 'additionalContext.category')}
          admissions={_.get(pathContext, 'group')}
          renderPaginate={<Paginate  pathContext={pathContext} />}
        />
        
      </div>
    )
  }
}

export default AdmissionTemplate

export const admissionQuery = graphql`
  query AdmissionQuery($category: String) {
    allWordpressWpAdmission(
      filter: { categories: { slug: { eq: $category } } }
    ) {
      edges {
        node {
          id
          slug
          title
          modified
          categories {
            slug
          }
          featured_media {
            source_url
          }
          acf {
            short_description
          }
          content
        }
      }
    }
  }
`
