import React from 'react'
import PropTypes from 'prop-types'
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import _ from 'lodash'
import * as Scroll from 'react-scroll'
import Link from 'gatsby-link'
import StaticLogo from '../../components/StaticLogo'
import ScrollToDetail from '../../components/ScrollToDetailButton'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'

export default class GeneralContainer extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    this.state = {
      selecting: 0,
      mobileDropDown: null,
      data: this.props.data,
    }
  }
  componentDidMount() {
    if (this.state.data.length > 1)
      this.setState({
        data: _.sortBy(this.state.data, ['title']),
      })
    if (this.props.data[this.state.selecting]) {
      this.setState({ mobileDropDown: 0 })
    } else {
      this.setState({ mobileDropDown: null })
    }
  }
  RenderSubCat = () => {
    if (this.state.data.length > 1)
      return (
        <div className=" row center" style={{ width: '90vw' }}>
          {_.map(this.state.data, (item, idx) => {
            return (
              <div
                key={idx}
                style={{ paddingLeft: '5px', paddingRight: '5px' }}
                className=" default-link text-header-sub  link-container"
                onClick={() => {
                  this.setState({ selecting: idx })
                }}
              >
                {item.title} {idx + 1 == this.state.data.length ? null : '|'}
                <div
                  className=" link-underline"
                  style={idx == this.state.selecting ? { width: '80%' } : null}
                />
              </div>
            )
          })}
        </div>
      )
    else return null
  }
  RenderMobileSubCat = () => {
    if (this.state.data.length > 1)
      return (
        <div style={{ width: '80%', marginTop: '15px' }}>
          {_.map(this.state.data, (category, idx) => (
            <React.Fragment>
              <div
                key={category.slug}
                className="row center  text-header-sub"
                style={{ width: '100%' }}
              >
                <div
                  href={`#`}
                  className={'titleHeight '}
                  onClick={() => this.setState({ selecting: idx })}
                  style={
                    idx === this.state.selecting
                      ? { width: '100%', color: 'white' }
                      : { width: '100%', opacity: 0.8 }
                  }
                >
                  {category.title}
                </div>

                <hr
                  style={
                    idx === this.state.selecting
                      ? customStyle.hrSelecting
                      : customStyle.hr
                  }
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      )
    else return null
  }
  render() {
    console.log(this.props)
    let title
    let banner_image
    let content
    if (this.state.data[this.state.selecting]) {
      // if(typeof this.state.data!= "object")

      title = this.state.data[this.state.selecting].title
      banner_image = this.state.data[this.state.selecting].acf.banner_image
      content = this.state.data[this.state.selecting].acf.content
      
    } else {
      title = this.state.data.title
      banner_image = this.state.data.acf.banner_image
      content = this.state.data.acf.content
    }
    console.log(this.state.data)
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
                <div className="text-header-title">
                  {_.replace(this.props.title, '&#038;', '&')}
                </div>
                <div className="text-header-sub">
                  Prince of Songkla University International College
                </div>

                <this.RenderSubCat />
              </div>
            </div>
          </div>
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
                  {_.replace(this.props.title, '&#038;', '&')}
                </div>
                {this.state.data.length > 1 ? null : (
                  <div className="text-header-sub">
                    Prince of Songkla University International College
                  </div>
                )}
                <this.RenderMobileSubCat />
                <StaticLogo />
                <ScrollToDetail />
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
           { this.state.data.length > 1? <div style={{lineHeight:"100%",marginBottom:"1rem" }} className="hd2" >{title}</div>:null}
            
            <div
              className="dt1"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </div>
      </div>
    )
  }
}

const GeneralType = PropTypes.shape({
  id: PropTypes.string,
  slug: PropTypes.string,
  title: PropTypes.string,
  acf: PropTypes.shape({
    banner_image: PropTypes.shape({
      source_url: PropTypes.string,
    }),
    content: PropTypes.string,
  }),
})

GeneralContainer.propType = {
  data: PropTypes.oneOfType([GeneralType, PropTypes.arrayOf(GeneralType)])
    .isRequired,
}
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

//object || array
