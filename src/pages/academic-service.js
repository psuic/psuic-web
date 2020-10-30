// academic-service
import React from 'react'
import StaticContainer from '../templates/static/StaticContainer'
import { getTagFromURL } from '../services/utils';

const AcademicServicePage = ({ loading, data }) => {
  if (loading) {
    return null
  } else {
    return <StaticContainer data={_.get(data, 'wordpressWpStatic')}  tag={getTagFromURL()} />
  }
}

export default AcademicServicePage

export const AcademicServiceQuery = graphql`
  query academicServiceQuery {
    wordpressWpStatic(slug: { eq: "academic-service" }) {
      id
      slug
      title
      acf {
        banner_image {
          source_url
        }
        content
      }
    }
  }
`
