import React from 'react'
import PropTypes from 'prop-types'
import AnnualReportItem from './AnnualReportItem'

import Link from 'gatsby-link'
import StaticLogo from '../../components/StaticLogo'
import ScrollToDetail from '../../components/ScrollToDetailButton'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'

export default class AnnualReportContainer extends React.Component {
  render() {
    return (
      <div className="menubar">
        <div className="staff-header lg">
          <img
            src={require('../../images/banner/History.png')}
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
              src={require('../../images/banner/graphics/generalG3.png')}
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
                <div className="text-header-title">Annual Report</div>
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
            <img
              src={require('../../images/banner/History.png')}
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
                <div className="text-header-title">Annual Report</div>
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
        <div className="short-bg text-md" style={{ color: '#193c6c' }}>
          <div
            style={{
              minHeight: '60vh',
              paddingTop: '1rem',
              paddingBottom: '40px',
              margin: 'auto',
              maxWidth: '960px',
            }}
            className="container "
          >
            <Breadcrumb tag="nav" listTag="div" className="t3">
              <BreadcrumbItem tag="a" href="/">
                Home
              </BreadcrumbItem>
              <BreadcrumbItem active tag="span">
                About
              </BreadcrumbItem>
              <BreadcrumbItem active tag="span">
                Annual Report
              </BreadcrumbItem>
            </Breadcrumb>
            <div
              className="row"
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '',
                margin: 0,
              }}
            >
              {_.map(this.props.datas, data => (
                <AnnualReportItem key={data.id} {...data} />
              ))}
            </div>
          </div>
          <div className="center">{this.props.renderPaginate}</div>
        </div>
      </div>
    )
  }
}

AnnualReportContainer.propType = {
  datas: PropTypes.array,
  renderPaginate: PropTypes.element,
}
