import React from 'react'
import StaffContainer from '../../templates/staff/StaffContainer'

const StaffPage = ({ loading, data }) => {
  if (loading) {
    return null
  } else {
    return <StaffContainer staffs={data.allWordpressWpStaff.edges} />
  }
}

export default StaffPage

export const staffsQuery = graphql`
query staffsQuery {
  allWordpressWpStaff {
    edges {
      node {
        id
        slug
        title
        categories{
          name
          slug
        }
        date(formatString: "MMMM DD, YYYY")
        acf {
          image_profile {
            source_url
          }
          position
          detail
          phone
          email
          website
        }
      }
    }
  }
}
`
