// general-education
import React from 'react'
import StaticContainer from '../templates/static/StaticContainer'
import { getTagFromURL } from '../services/utils';

const GeneralEducationPage = ({ loading, data }) => {
  if (loading) {
    return null
  } else {
    return <StaticContainer data={_.get(data, 'wordpressWpStatic')}  tag={getTagFromURL()} />
  }
}

export default GeneralEducationPage

export const generalEducationQuery = graphql`
  query generalEducationQuery {
    wordpressWpStatic(slug: { eq: "general-education" }) {
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
