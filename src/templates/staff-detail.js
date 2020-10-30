import React from 'react'
import Helmet from 'react-helmet'

import StaffDetail from './staff/StaffDetail'

export default function StaffDetailTemplate({ loading, data }) {
  if (loading) {
    return null
  }
  const staff = _.get(data, 'wordpressWpStaff')

  return (
    <React.Fragment>
      <Helmet
        title={_.get(staff, `title`)}
        meta={[
          { name: 'description', content: _.get(staff, `acf.position` )},
          { name: 'imageURL', content: _.get(staff, `acf.image_profile.source_url`)}
        ]}
        // url={window.location.href}
      />
      <StaffDetail staff={staff} />
    </React.Fragment>
  )
}

export const currentStaff = graphql`
  query currentStaff($slug: String) {
    wordpressWpStaff(slug: { eq: $slug }) {
      id
      slug
      title
      modified
      categories {
        slug
      }
      acf {
        image_profile {
          source_url
        }
        position
        detail
        more_detail
        phone
        email
        website
      }
    }
  }
`
