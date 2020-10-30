import React from 'react'
import StaticContainer from '../../templates/static/StaticContainer'
import { getTagFromURL } from '../../services/utils';

const MOUCollaborationsPage = ({ loading, data }) => {
  if (loading) {
    return null
  } else {
    return <StaticContainer data={_.get(data, 'wordpressWpStatic')}  tag={getTagFromURL()} />
  }
}

export default MOUCollaborationsPage

export const mouCollaborationsQuery = graphql`
  query mouCollaborationsQuery {
    wordpressWpStatic(slug: { eq: "mou-collaborations" }) {
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
