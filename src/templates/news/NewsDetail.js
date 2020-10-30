import React from 'react'
import PropTypes from 'prop-types'
import StaticLogo from '../../components/StaticLogo'
import moment from 'moment'
import _ from 'lodash'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import ScrollToDetail from '../../components/ScrollToDetailButton'

export default class NewsDetail extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  render() {
    const news = this.props.news
    _.remove(news.categories, { slug: 'news' })
    console.log(_.get(news, 'categories[0].slug'))
    console.log(_.get(news, 'categories'))

    const { content } = this.props.news.acf
    return (
      <div className="menubar">
        <div className="staff-header lg">
          <img
            src={require('../../images/banner/Admission.png')}
            className="staff-header-image"
          />
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
              src={require('../../images/banner/graphics/generalG2.png')}
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
                  {_.replace(news.title, '&#038;', '&')}
                </div>
                <div className="text-header-sub">
                  Prince of Songkla University International College
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm">
          <div className="mobile-header">
            <img
              src={require('../../images/banner/Admission.png')}
              className="staff-header-image"
            />
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
                  {_.replace(news.title, '&#038;', '&')}
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
              minHeight: '60vh',
              marginTop: '1rem',
              marginBottom: '40px',
              maxWidth: '960px',
              color: '#193c6c',
            }}
          >
            <Breadcrumb tag="nav" listTag="div" className="t3">
              <BreadcrumbItem tag="a" href="/">
                Home
              </BreadcrumbItem>
              
              {_.get(news, 'categories[0].slug') ? (
                <BreadcrumbItem
                  tag="a"
                  href={'/news/category/' + _.get(news, 'categories[0].slug')}
                >
                  {_.startCase(_.replace(_.get(news, 'categories[0].slug'),"-"," "))}
                </BreadcrumbItem>
              ) : null}

              <BreadcrumbItem active tag="span">
                {news.title}
              </BreadcrumbItem>
            </Breadcrumb>
            <div
              className="hd2"
              style={{ lineHeight: '0.8em', marginTop: '1rem' }}
            >
              {news.title}
            </div>
            <div style={{ lineHeight: '1' }}>
              {moment(news.modified).format('DD MMMM YYYY')}
            </div>

            {/* <hr /> */}
            <div
              style={{ minHeight: '60vh', color: '#193c6c', marginTop: '1rem' }}
              className=" dt1"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </div>
      </div>
    )
  }
}

NewsDetail.propTypes = {
  news: PropTypes.object,
}
