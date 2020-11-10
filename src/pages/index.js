import React from 'react'
import _ from 'lodash'
import { withProps } from 'recompose'
import Link from 'gatsby-link'

import HomeContainer from '../templates/home/HomeContainer'

const HomePage = ({
  loading,
  gallery,
  program,
  admission,
  newsSection,
}) => {
  if (loading) {
    return null
  } else {
    return (
      <HomeContainer
        gallery={gallery}
        program={program}
        admission={admission}
        newsSection={newsSection}
      />
    )
  }
}

export default withProps(ownerProps => {
  if (!ownerProps.loading) {
    const nodes = _.chain(ownerProps)
      .get('data.allWordpressWpHome.edges')
      .map('node')
      .value()

    const gallery = _.find(nodes, { slug: 'gallery' })
    const admission = _.find(nodes, { slug: 'admission' })
    const program = _.find(nodes, { slug: 'program' })
    const newsSection = _.chain(ownerProps.data)
      .omit(['allWordpressWpHome'])
      .reduce((prev, curr, key) => {
        prev[key] = _.chain(curr)
          .get('edges')
          .map('node')
          .value()
        return prev
      }, {})
      .value()

    return {
      gallery,
      admission,
      program,
      newsSection,
    }
  }
})(HomePage)

export const homesQuery = graphql`
  fragment NewsFragment on wordpress__wp_newsConnection {
    edges {
      node {
        slug
        title
        modified
        acf {
          thumbnail_image {
            source_url
          }
          short_description
        }
      }
    }
  }
  query homeQuery {
    allWordpressWpHome {
      edges {
        node {
          slug
          acf {
            slide_interval
            media_slide_1 {
              source_url
              media_type
              mime_type
            }
            media_slide_2 {
              source_url
              media_type
              mime_type
            }
            media_slide_3 {
              source_url
              media_type
              mime_type
            }
            media_slide_4 {
              source_url
              media_type
              mime_type
            }
            header1
            image1 {
              source_url
            }
            header2
            image2 {
              source_url
            }
            header3
            image3 {
              source_url
            }
            media_link_1
            media_link_2
            media_link_3
            media_link_4
          }
        }
      }
    }

    allNews: allWordpressWpNews(
      limit: 4
      sort: { fields: [modified], order: DESC }
    ) {
      ...NewsFragment
    }
    newsByUpcommingEvents: allWordpressWpNews(
      filter: { categories: { slug: { eq: "upcoming-events" } } }
      limit: 4
      sort: { fields: [modified], order: DESC }
    ) {
      ...NewsFragment
    }
    newsByGeneralNews: allWordpressWpNews(
      filter: { categories: { slug: { eq: "general-news" } } }
      limit: 4
      sort: { fields: [modified], order: DESC }
    ) {
      ...NewsFragment
    }
    newsByCareerOpportunities: allWordpressWpNews(
      filter: { categories: { slug: { eq: "career-opportunities" } } }
      limit: 4
      sort: { fields: [modified], order: DESC }
    ) {
      ...NewsFragment
    }
    newsByProcurementNews: allWordpressWpNews(
      filter: { categories: { slug: { eq: "procurement-news" } } }
      limit: 4
      sort: { fields: [modified], order: DESC }
    ) {
      ...NewsFragment
    }
  }
`
