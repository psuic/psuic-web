import React from 'react'
import StaticLogo from '../../components/StaticLogo'
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import ScrollToDetail from '../../components/ScrollToDetailButton'

const StaffHeader = props => {
  console.log(props)
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
          <img
            src={require('../../images/banner/graphics/Staff-g.png')}
            className="staff-header-image"
          />

          <div>
            <div className="section-item-text-centered">
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
                <div className="text-header-title">STAFF</div>
                <div className="text-header-sub">
                  Prince of Songkla University International College
                </div>
                <div className="row center text-header-sub">
                  {props.children}
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
              <div className="text-header-title">STAFF</div>
              {/* <div className="text-header-sub">
                Prince of Songkla University International College
              </div> */}
              <div style={{ width: '80%',marginTop:"15px" }}>
                {_.map(props.categories, (category, idx) => (
                  <React.Fragment>
                    <div
                      key={category.slug}
                      className="row center  text-header-sub "
                      style={{ width: '100%' }}
                    >
                      <div
                        href={`#`}
                        className={' titleHeight '}
                        onClick={() => props.onSelectStaff(category.slug)}
                        style={
                          category.slug === props.currentStaffRef
                            ? { width: '100%', color: 'white' }
                            : { width: '100%', opacity: 0.8 }
                        }
                      >
                        {category.name}
                      </div>

                      <hr
                        style={
                          category.slug === props.currentStaffRef
                            ? customStyle.hrSelecting
                            : customStyle.hr
                        }
                      />
                    </div>
                  </React.Fragment>
                ))}
              </div>
              <StaticLogo />
              <ScrollToDetail />
              {/* <div className="row center text-header-sub">{props.children}</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StaffHeader

const customStyle = {
  linkStyle: {
    color: 'white',
    cursor: 'pointer',
    textAlign: 'center',
    textDecoration: 'none',
  },
  subContainer: {
    marginLeft: 20,
    //fontSize: 20,
  },
  hr: {
    marginBottom: 5,
    marginTop: 5,
    borderColor: 'white',
    borderWidth: '2px',
    opacity: 0.4,
    width: '100%',
  },
  hrSelecting: {
    marginBottom: 5,
    marginTop: 5,
    borderColor: 'white',
    borderWidth: '2px',
    opacity: 1,
    width: '100%',
  },
}
