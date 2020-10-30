import React from 'react'
import GeneralContainer from './general/GeneralContainer'
import { getTitleFromPostCategories,getTagFromURL } from '../services/utils';

export default function CurriculumDetailTemplate({ loading, data }) {
  if (loading) {
    return null
  } else {
    const _data = _.chain(data)
    .get('allWordpressWpMajorCurriculum.edges')
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

export const currentMajorCurriculum = graphql`
  query currentMajorCurriculumQuery($slug: String) {
    allWordpressWpMajorCurriculum(
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
