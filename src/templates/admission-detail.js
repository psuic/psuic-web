import React from 'react'
import AdmissionDetail from './admission/AdmissionDetail';

const AdmissionDetailTemplate = ({ loading, data }) => {
  if (loading) {
    return null
  } else {
    return <AdmissionDetail admission={_.get(data, 'wordpressWpAdmission')} />
  }
}

export default AdmissionDetailTemplate

export const currentAdmission = graphql`
  query currentAdmissionQuery($slug: String) {
    wordpressWpAdmission(slug: { eq: $slug }) {
      id
      slug
      title
      modified
      featured_media{
        source_url
      }
      content
      categories{
        slug
      }
      
    }
  }
`
