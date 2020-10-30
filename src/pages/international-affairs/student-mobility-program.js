import React from 'react'
import StaticContainer from '../../templates/static/StaticContainer'
import { getTagFromURL } from '../../services/utils';

const StudentMobilityProgram = ({ loading, data }) => {
  if (loading) {
    return null
  } else {
    return <StaticContainer data={_.get(data, 'wordpressWpStatic')}  tag={getTagFromURL()} />
  }
}

export default StudentMobilityProgram

export const studentMobilityProgramQuery = graphql`
  query studentMobilityProgramQuery {
    wordpressWpStatic(slug: { eq: "student-mobility-program" }) {
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
