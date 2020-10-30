import React from 'react'
import StaticContainer from '../templates/static/StaticContainer'
import { getTagFromURL } from '../services/utils';

const CoOpEducationPage = ({ loading, data }) => {
  if (loading) {
    return null
  } else {
    return <StaticContainer data={_.get(data, 'wordpressWpStatic')}  tag={getTagFromURL()} />
  }
}

export default CoOpEducationPage

export const coOpEducationQuery = graphql`
  query coOpEducationQuery {
    wordpressWpStatic(slug: { eq: "co-op-education" }) {
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
