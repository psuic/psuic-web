import React, { Component } from 'react'
import _ from 'lodash'
import Link from 'gatsby-link'
import AdmissionItem from './AdmisssionItem'
import AdmissionHeader from './AdmissionHeader'
import SectionContainer from '../../components/SectionContainer'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'

class AdmissionContainer extends Component {
  state = {}

  render() {
    console.log(this.props.category)

    return (
      <div>
        <AdmissionHeader category={this.props.category}>
          <div className=" link-container ">
            <Link
              to="/admission/category/thai-education-system"
              className="default-link"
            >
              <span className="text-header-sub">
                {' '}
                Thai Secondary School Certificate{' '}
              </span>
            </Link>
            <div
              className={
                this.props.category == 'thai-education-system'
                  ? 'link-selecting'
                  : 'link-underline'
              }
            />
          </div>

          <span
            style={{ color: 'white', paddingLeft: '2vw', paddingRight: '2vw' }}
          >
            {' '}
            |{' '}
          </span>
          <div className="link-container">
            <Link
              to="/admission/category/international-certificate"
              className="default-link"
            >
              <span className="text-header-sub">
                {' '}
                International Certificate{' '}
              </span>
            </Link>
            <div
              className={
                this.props.category == 'international-certificate'
                  ? 'link-selecting'
                  : 'link-underline'
              }
            />
          </div>
        </AdmissionHeader>
        <div className="short-bg text-md" style={{ color: '#193c6c' }}>
          <div style={{ margin: 'auto', maxWidth: '90vw' }}>
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
                  Admission
                </BreadcrumbItem>
                  <BreadcrumbItem active tag="span">
                    {this.props.category == 'thai-education-system'
                      ? 'Thai Secondary School Certificate'
                      : 'International Certificate'}
                  </BreadcrumbItem>
                </Breadcrumb>
                <div className=" row center">
                  {_.map(this.props.admissions, ({ node }) => (
                    <AdmissionItem key={node.id} admission={node} />
                  ))}
                </div>
              </div>
              <div className="center">{this.props.renderPaginate}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AdmissionContainer

const customStyle = {
  linkStyle: {
    color: 'white',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  subContainer: {
    marginLeft: 20,
    fontSize: 16,
  },
  hr: {
    marginBottom: 5,
    marginTop: 5,
    borderColor: 'white',
  },
}
