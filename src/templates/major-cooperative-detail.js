import React from 'react'
import _ from 'lodash'
import GeneralContainer from './general/GeneralContainer'
import { getTitleFromPostCategories,getTagFromURL } from '../services/utils';

export default function MajorCooperativeDetailTemplate({ loading, data, props }) {
  if (loading) {
    return null
  } else {
    const _data = _.chain(data)
    .get('allWordpressWpMajorCooperative.edges')
    .map('node')
    .value()

    return (
      <GeneralContainer
        title={getTitleFromPostCategories(_data)}
        tag={getTagFromURL()}
        data={_data}
      />
    )
  }
}

export const currentMajorCooperative = graphql`
  query currentMajorCooperativeQuery($slug: String) {
    allWordpressWpMajorCooperative(
      filter: { categories: { slug: { eq: $slug } } }
    ) {
      edges {
        node {
          id
          slug
          title
          modified
          categories {
            name
            slug
          }
          acf {
            banner_image {
              source_url
            }
            content
          }
        }
      }
    }
  }
`
