import React from 'react'
import PropTypes from 'prop-types'
import Link, { replace } from 'gatsby-link'
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import _ from 'lodash'
import NewsItem from './NewsItem'
import StaticLogo from '../../components/StaticLogo'
import ScrollToDetail from '../../components/ScrollToDetailButton'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'

export default class NewsContainer extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props)

    this.subcat = [
      {
        title: 'Upcoming Event',
        slug: '/news/category/upcoming-events',
        key: 'upcoming-events',
      },
      {
        title: 'General News',
        slug: '/news/category/general-news',
        key: 'general-news',
      },
      {
        title: 'Procurement News',
        slug: '/news/category/procurement-news',
        key: 'procurement-news',
      },
      {
        title: 'Career Opportunities',
        slug: '/news/category/career-opportunities',
        key: 'career-opportunities',
      },
    ]
    this.state = {
      selecting: _.find(this.subcat, { key: this.props.category }),
    }
  }
  componentDidMount() {
    this.setState({
      selecting: _.find(this.subcat, { key: this.props.category }),
    })
  }
  RenderSubCat = () => {
    return (
      <div className=" row center " style={{ width: '90vw' }}>
        {_.map(this.subcat, (item, idx) => {
          return (
            <div
              key={idx}
              style={{ paddingLeft: '5px', paddingRight: '5px' }}
              className=" default-link text-header-sub link-container"
              onClick={() => {
                this.setState({ selecting: idx })
              }}
            >
              <Link className="default-link" to={item.slug}>
                {item.title} {idx + 1 == this.subcat.length ? '' : '|'}
              </Link>
              <div
                className=" link-underline"
                style={
                  item.key == this.props.category ? { width: '80%' } : null
                }
              />
            </div>
          )
        })}
      </div>
    )
  }
  setSelecting(newValue) {
    console.log(newValue)
    let newItem = _.find(this.subcat, { title: newValue })
    this.setState({
      selecting: newItem,
    })
  }
  changeValue = e => {
    console.log(e)
    // this.setSelecting(e.target.value)
    //let newItem = _.find(this.subcat, { title: e.title })
    this.setState({
      selecting: newItem,
    })
    replace(newItem.slug)
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
                className={' titleHeight '}
                onClick={() => replace(category.slug)}
                style={
                  category.key === this.props.category
                    ? { width: '100%', color: 'white' }
                    : { width: '100%', opacity: 0.7 }
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
  render() {
    console.log(this.props)
    console.log(this.state)

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
                <div className="text-header-title">NEWS</div>
                <div className="text-header-sub">
                  Prince of Songkla University International College
                </div>

                <this.RenderSubCat />
              </div>
            </div>
          </div>
        </div>
        {/* /// */}
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
                <div className="text-header-title">NEWS</div>

                <div className="text-header-sub">
                  Prince of Songkla University International College
                </div>
                <this.RenderMobileSubCat />
                <StaticLogo />
                <ScrollToDetail />

                {/* <div className="row center text-header-sub">{props.children}</div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="short-bg text-md" style={{ color: '#193c6c' }}>
          <div
            style={{
              paddingTop: '1rem',
              paddingBottom: '80px',
              margin: 'auto',
              maxWidth: '960px',
            }}
          >
            <div className="container " style={{ paddingBottom: '40px' }}>
              <Breadcrumb tag="nav" listTag="div" className="t3">
                <BreadcrumbItem tag="a" href="/">
                  Home
                </BreadcrumbItem>
                <BreadcrumbItem active tag="span">
                  {_.startCase(_.replace(this.props.category,"-"," "))}
                </BreadcrumbItem>
              </Breadcrumb>
              <div className=" row center">
                {_.map(this.props.news, ({ node }) => (
                  <NewsItem key={node.id} new={node} />
                ))}
              </div>
            </div>
            <div className="center">{this.props.renderPaginate}</div>
          </div>
        </div>
      </div>
    )
  }
}

NewsContainer.propType = {
  category: PropTypes.string,
  news: PropTypes.array,
  renderPaginate: PropTypes.element,
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
    marginBottom: 2,
    marginTop: 2,
    borderColor: 'white',
    borderWidth: '2px',
    opacity: 0.4,
    width: '100%',
  },
  hrSelecting: {
    marginBottom: 2,
    marginTop: 2,
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
