import React from 'react'
import Link from 'gatsby-link'
import StaticLogo from '../../components/StaticLogo';

const VisionMissionHeader = props => {
  return (
    <div className="staff-header text-lg">
      <img
        src={require('../../images/banner/History.png')}
        className="staff-header-image"
      />
      <img
        src={require('../../images/OpacityHeader.png')}
        className="staff-header-image"
      />
      <img
        src={require('../../images/banner/graphics/Hist-Curri-Ad-G.png')}
        className="staff-header-image"
      />
      <div>
        <div className="section-item-text-centered">
          <div className="text-header-title ">Vision & Mission</div>
          <div className="text-header-sub">
            Prince of Songkla University International College
          </div>
          <div className="text-header-sub">
            <div className="row center">

              <div className="link-container" >
                <Link className="default-link" to="/about/history/" >
                  <span style={{ }} >History </span>
                </Link>
                <div className="link-underline"></div>
              </div>

              <div style={{ marginLeft: '2vw', marginRight: '2vw', }}>
                {' | '}
              </div>

              <div className="link-container" >
                <Link className="default-link" to="/about/vision-mission/" >
                  <span style={{ fontWeight: "700", }} >Vision & Mission </span>
                </Link>
                <div className="link-selecting" ></div>
              </div>

              <div style={{ marginLeft: '2vw', marginRight: '2vw', }}>
                {' | '}
              </div>
              <div className="link-container" >
                <Link className="default-link" to="/about/staff/" >
                  <span style={{}} > Staff </span>
                </Link>
                <div className="link-underline" ></div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <StaticLogo />
    </div>
  )
}

export default VisionMissionHeader
