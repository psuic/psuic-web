import React from 'react'
import PropTypes from 'prop-types'
import StaticLogo from '../../components/StaticLogo'
import ScrollToDetail from '../../components/ScrollToDetailButton'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'

const StaffDetail = ({ staff }) => {
  console.log(staff)
  const { title, acf } = staff
  const { detail } = staff.acf
  return (
    <div className="menubar">
      <div className="lg">
        <div className="staff-header">
          <img
            src={require('../../images/banner/Staff.png')}
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
              }}
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
                <div className="text-header-title">{title}</div>
                <div className="text-header-sub">
                  Prince of Songkla University International College
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm">
        <div className="mobile-header">
          <img
            src={require('../../images/banner/Staff.png')}
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
              <div className="text-header-title">{title}</div>
              <br />
              <div className="text-header-sub">
                Prince of Songkla University International College
              </div>
              <StaticLogo />
              <ScrollToDetail />
              {/* <div className="row center text-header-sub">{props.children}</div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="default-bg text-md" style={{ color: '#193c6c' }}>
        <div style={{ maxWidth: '90vw', margin: 'auto' }}>
          <div
            className="container "
            style={{
              paddingTop: '1rem',
              paddingBottom: '40px',
              // maxWidth: '90vw',
              maxWidth: '960px',
            }}
          >
            <Breadcrumb tag="nav" listTag="div" className="t3">
              <BreadcrumbItem tag="a" href="/">
                Home
              </BreadcrumbItem>
              <BreadcrumbItem active tag="span">
                About
              </BreadcrumbItem>
              <BreadcrumbItem tag="a" href="/about/staff">
                Staff
              </BreadcrumbItem>
              <BreadcrumbItem active tag="span">
                {staff.title}
              </BreadcrumbItem>
            </Breadcrumb>
            <div className="row" style={{ display: 'flex' }}>
              <div
                className=" col-md-5 "
                style={{ marginBottom: '40px', height: 'auto' }}
              >
                <img
                  src={staff.acf.image_profile.source_url}
                  alt="Avatar"
                  // style={{width:"100%",height:"auto"}}
                  className="staff-image  default-image-shadow"
                />
              </div>
              <div className=" col-md-7 " style={{ marginBottom: '40px' }}>
                <div style={{ lineHeight: '80%' }} className="hd1">
                  {staff.title}
                </div>
                <div className="hd3">{acf.position}</div>
                <hr />
                <br />

                <div
                  className="dt1"
                  style={{ padding: 5 }}
                  dangerouslySetInnerHTML={{ __html: acf.detail }}
                />
                {acf.more_detail ? (
                  <React.Fragment>
                    <br />q
                    <div
                      className="dt1"
                      style={{ padding: 5 }}
                      dangerouslySetInnerHTML={{ __html: acf.more_detail }}
                    />
                  </React.Fragment>
                ) : null}

                <br />
                <div style={{ marginTop: '16px' }} className="hd2">
                  Contact
                </div>
                <div style={{ paddingLeft: '20px' }}>
                  {acf.phone ? (
                    <a
                      href={'tel:' + acf.phone}
                      className="row link"
                      style={customStyle.linkStyle}
                    >
                      <img
                        src={require('../../images/icons/old-handphone-dark.png')}
                        style={{
                          width: 18,
                          height: 18,
                          marginBottom: 0,
                          marginRight: '10px',
                        }}
                      />
                      <div className="dt1" style={customStyle.linkStyle}>
                        {acf.phone}
                      </div>
                    </a>
                  ) : null}
                  {acf.email ? (
                    <a
                      href={'mailto:' + acf.email}
                      className="row link"
                      style={customStyle.linkStyle}
                    >
                      <img
                        src={require('../../images/icons/black-envelope-dark.png')}
                        style={{
                          width: 18,
                          height: 18,
                          marginBottom: 0,
                          marginRight: '10px',
                        }}
                      />
                      <div
                        className="dt1"
                        style={{ color: '#193c6c', paddingBottom: 5 }}
                      >
                        {acf.email}
                      </div>
                    </a>
                  ) : null}
                  {acf.website ? (
                    <a
                      href={acf.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="row link"
                    >
                      <img
                        src={require('../../images/icons/world-dark.png')}
                        style={{
                          width: 18,
                          height: 18,
                          marginBottom: 0,
                          marginRight: '10px',
                        }}
                      />
                      <div
                        className="text-md text-hight-sm"
                        style={{ color: '#193c6c', paddingBottom: 5 }}
                      >
                        {acf.website}
                      </div>
                    </a>
                  ) : null}
                </div>
                {/* {JSON.stringify(staff)} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StaffDetail

StaffDetail.propType = {
  staff: PropTypes.object,
}
const customStyle = {
  linkStyle: {
    paddingBottom: 5,
    display: 'flex',
    alignItems: 'center',
    color: '#193c6c',
  },
}
