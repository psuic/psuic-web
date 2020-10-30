import React from 'react'
import StaticContainer from '../../templates/static/StaticContainer'
import { getTagFromURL } from '../../services/utils';

const FacilitiesPage = ({ loading, data }) => {
  if (loading) {
    return null
  } else {
    return <StaticContainer data={_.get(data, 'wordpressWpStatic')} tag={getTagFromURL()}/>
  }
}

export default FacilitiesPage

export const facilitiesQuery = graphql`
  query facilitiesQuery {
    wordpressWpStatic(slug: { eq: "facilities" }) {
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
