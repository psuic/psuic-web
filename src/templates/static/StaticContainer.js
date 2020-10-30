import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Link from 'gatsby-link'
import StaticLogo from '../../components/StaticLogo'
import ScrollToDetail from '../../components/ScrollToDetailButton';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'

export default class StaticContainer extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
  }
  render() {
    if(this.props.data){
      
   
    const { title } = this.props.data
    const { banner_image, content } = this.props.data.acf
    return (
      <div className="menubar">
        <div className="staff-header lg">
          <img src={banner_image.source_url} className="staff-header-image" />
          <img
            src={require('../../images/OpacityHeader.png')}
            className="staff-header-image"
          />
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img
              src={require('../../images/banner/graphics/generalG.png')}
              // className="staff-header-image"
              style={{ width: '100%' }}
            />
          </div>
          <div>
            <div
              className="section-item-text-centered"
              style={{ width: '100%' }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  maxWidth: '960px',
                }}
              >
                <div className="text-header-title">
                  {_.replace(title, '&#038;', '&')}
                </div>
                <div className="text-header-sub">
                  Prince of Songkla University International College
                </div>
              </div>
            </div>
          </div>
          {/* <StaticLogo /> */}
        </div>
        <div className="sm">
          <div className="mobile-header">
            <img src={banner_image.source_url} className="staff-header-image" />
            <img
              src={require('../../images/OpacityHeader.png')}
              className="staff-header-image"
            />
            <div>
              <div
                className="general-header-text "
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '10%',
                }}
              >
                <div className="text-header-title">
                  {_.replace(title, '&#038;', '&')}
                </div>

                <div className="text-header-sub">
                  Prince of Songkla University International College
                </div>
                <StaticLogo />
                <ScrollToDetail />

                {/* <this.RenderSubCat /> */}
              </div>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: '90vw', margin: 'auto' }}>
          <div
          className="container"
            style={{
              marginRight: 'auto',
              marginLeft:"auto",
              minHeight: '60vh',
              marginTop: '1rem',
              marginBottom: '40px',
              maxWidth: '960px',
            }}
          >
            <Breadcrumb tag="nav" listTag="div" className="t3">
              <BreadcrumbItem tag="a" href="/">
                Home
              </BreadcrumbItem>
              {_.map(this.props.tag, tag => (
                <BreadcrumbItem active tag="span">
                  {_.startCase(tag)}
                </BreadcrumbItem>
              ))}
            </Breadcrumb>
            <div
              className="dt1"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </div>
      </div>
    )
  }
  else{
    return <div className="menubar">
      <div style={{marginTop:"100px"}}>404: not found</div>
    </div>
  }
  }
  
}

StaticContainer.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    slug: PropTypes.string,
    title: PropTypes.string,
    acf: PropTypes.shape({
      banner_image: PropTypes.shape({
        source_url: PropTypes.string,
      }),
      content: PropTypes.string,
    }),
  }),
}

// {
//   "data": {
//     "allWordpressWpStatic": {
//       "edges": [
//         {
//           "node": {
//             "slug": "vision-and-mission"
//           }
//         },
//         {
//           "node": {
//             "slug": "general-education"
//           }
//         },
//         {
//           "node": {
//             "slug": "co-op-education"
//           }
//         },
//         {
//           "node": {
//             "slug": "facilities"
//           }
//         }
//       ]
//     }
//   }
// }
