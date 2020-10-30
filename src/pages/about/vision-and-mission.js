import React from 'react'
import StaticContainer from '../../templates/static/StaticContainer'
import { getTagFromURL } from '../../services/utils';

const VisionAndMissionPage = ({ loading, data }) => {
  if (loading) {
    return null
  } else {
    return <StaticContainer data={_.get(data, 'wordpressWpStatic')}   tag={getTagFromURL()}/>
  }
}

export default VisionAndMissionPage

export const visionAndMissionQuery = graphql`
  query visionAndMissionQuery {
    wordpressWpStatic(slug: { eq: "vision-and-mission" }) {
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
