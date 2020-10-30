import React, { Component } from 'react'
import GeneralContainer from './general/GeneralContainer'

const GeneralTemplate = ({ loading, data }) => {
  if (loading) {
    return null
  } else {
    return <GeneralContainer data={_.get(data, 'wordpressWpGeneral')} />
  }
}

export default GeneralTemplate

export const pageQuery = graphql`
  query currentGeneralQuery($slug: String) {
    wordpressWpGeneral(slug: { eq: $slug }) {
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
