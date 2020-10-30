import React from 'react'
import _ from 'lodash'

export default function StructurePage({ loading, data }) {
  if (loading) {
    return null
  }
  const allSitePages = _.chain(data)
    .get('allSitePage.edges')
    .map('node.path')
    .value()

  let origin

  if(typeof window !== `undefined`){
    origin = _.get(window, 'location.origin')
  }
  
  const mainSitePage = groupMainSitePage(allSitePages)

  return (
    <div>
      <div className="container">
        <h1>Structure Page</h1>
        {_.map(mainSitePage, (sitePages, mainSite) => {
          return (
            <ul key={mainSite}>
              <li>
                {_.size(sitePages) > 1 ? (
                  <React.Fragment>
                    <h2>/{mainSite}</h2>
                    <ul key={mainSite}>
                      {_.map(sitePages, sitePage => (
                        <li key={sitePage}>
                          <a href={`${origin}${sitePage}`}>{sitePage}</a>
                        </li>
                      ))}
                    </ul>
                  </React.Fragment>
                ) : (
                  <h2>
                    <a href={`${origin}${_.get(sitePages, 0)}`}>
                      {_.get(sitePages, 0)}
                    </a>
                  </h2>
                )}
              </li>
            </ul>
          )
        })}
      </div>
    </div>
  )
}

function groupMainSitePage(allSitePages) {
  const page = {}

  _.each(allSitePages, sitePage => {
    const mainSite = _.chain(sitePage)
      .trim()
      .replace(' ', '')
      .split('/')
      .get(1)
      .value()

    if (!_.get(page, mainSite)) {
      page[mainSite] = []
    }

    page[mainSite].push(sitePage)
  })

  return _.omitBy(page, (p, key) => {
    //REJECT PATH OBJECT INCLUDE '___'  FOR DEV
    return _.includes(key, '___')
  })
}

export const queryStructureSite = graphql`
  query QuerySitePage {
    allSitePage {
      edges {
        node {
          path
        }
      }
    }
  }
`
