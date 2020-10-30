import React, { Component } from 'react'
import StaticLogo from '../../components/StaticLogo'
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import Link, { replace } from 'gatsby-link'
import ScrollToDetail from '../../components/ScrollToDetailButton';

class AdmissionHeader extends Component {
  constructor(props) {
    super(props)
    this.subcat = [
      {
        title: 'Thai Secondary School Certificate',
        slug: '/admission/category/thai-education-system',
        key: 'thai-education-system',
      },
      {
        title: 'International Certificate',
        slug: '/admission/category/international-certificate',
        key: 'international-certificate',
      },
    ]
  }

  RenderMobileSubCat = () => {
    return (
      <div style={{ width: '90%' }}>
        {_.map(this.subcat, (category, idx) => (
          <React.Fragment>
            <div
              key={category.slug}
              className="row center  text-header-sub "
              style={{ width: '100%' }}
            >
              <div
                href={`#`}
                className={'titleHeight '}
                onClick={() => replace(category.slug)}
                style={
                  category.key === this.props.category
                    ? { width: '100%', color: 'white' }
                    : { width: '100%', opacity: 0.8 }
                }
              >
                {category.title}
              </div>

              <hr
                style={
                  category.key === this.props.category
                    ? customStyle.hrSelecting
                    : customStyle.hr
                }
              />
            </div>
          </React.Fragment>
        ))}
      </div>
    )
  }
  changeValue = e => {
    console.log(e.target.value)
    // this.setSelecting(e.target.value)
    let newItem = _.find(this.subcat, { key: e.target.value })
    replace(newItem.slug)
  }
  render() {
    console.log(this.props)

    return (
      <div className="menubar">
        <div className="lg">
          <div className="staff-header">
            <img
              src={require('../../images/banner/Admission.png')}
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
              <div
                className="section-item-text-centered"
                style={{ width: '100%', maxWidth: '960px' }}
              >
                <div className="text-header-title">ADMISSION</div>
                <div className="text-header-sub">
                  Prince of Songkla University International College
                </div>
                <div className="row center ">{this.props.children}</div>
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
                  <div className="text-header-title">ADMISSION</div>
                  <div className="text-header-sub">
                    Prince of Songkla University International College
                  </div>
                  <this.RenderMobileSubCat />
                </div>
                <StaticLogo />
                <ScrollToDetail />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AdmissionHeader
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
  titleHeight: {
    paddingTop: '5px',
    paddingBottom: '5px',
  },
}
