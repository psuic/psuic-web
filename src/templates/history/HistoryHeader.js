import React from 'react'
import Link from 'gatsby-link'
import StaticLogo from '../../components/StaticLogo'
import ScrollToDetail from '../../components/ScrollToDetailButton';

const HistoryHeader = props => {
  return (
    <div className="menubar">
      <div className="lg">
        <div className="staff-header text-lg">
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
              src={require('../../images/banner/graphics/generalG.png')}
              // className="staff-header-image"
              style={{ width: '100%' }}
            />
          </div>
          <div>
            <div className="section-item-text-centered">
              <div className="text-header-title ">HISTORY</div>
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
              <div className="text-header-title">HISTORY</div>
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
    </div>
  )
}

export default HistoryHeader
