import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import _ from 'lodash'
import './index.css'
import './__wp-style.css'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'


import 'bootstrap/dist/css/bootstrap.css'
import Footer from '../components/Footer'
import BurgerMenu from '../components/BurgerMenu'
import MainMenu2 from '../components/Menu/Mainmenu2'

const TemplateWrapper = ({ children, data }) => {
  const menu = _.get(
    data,
    'allWordpressWpApiMenusMenusItems.edges[0].node.items'
  )
console.log(menu)
  return (
    <div style={{ height: '100%' }}>
      <Helmet
        title="PSUIC"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <div>
        <div className="menubar">
          <div className="sm">
            <BurgerMenu menu={menu} />
          </div>
          <div className="lg">
            <MainMenu2 menu={menu} />
          </div>
        </div>
        <div id="x-content">
          {children()}
          <Footer />
        </div>
      </div>
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const query = graphql`
  query LayoutQuery {
    allWordpressWpApiMenusMenusItems {
      edges {
        node {
          id
          name
          items {
            order
            title
            type
            object_id
            object
            object_slug
            url
            wordpress_children {
              order
              title
              type
              object_id
              object
              object_slug
              url
              wordpress_children {
                order
                title
                type
                object_id
                object
                object_slug
                url
                wordpress_children {
                  order
                  title
                  type
                  object_id
                  object
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`
