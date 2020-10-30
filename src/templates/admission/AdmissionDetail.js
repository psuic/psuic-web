import React from 'react'
import moment from 'moment'
import Link from 'gatsby-link'
import _ from 'lodash'
import AdmissionDetailHeader from './AdmissionDetailHeader'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'

const AdmissionHeaderCategoryTitle = ({ currentSlug, categories, title }) => {
  if (currentSlug == _.get(_.head(categories), 'slug'))
    return (
      <div className="link-container">
        <span style={{ fontWeight: 700 }}> {title} </span>
        <div className="link-selecting" />
      </div>
    )
  else
    return (
      <div className="link-container">
        <span style={{}}> {title} </span>
        <div className="link-underline" />
      </div>
    )
}

const AdmissionDetail = ({
  admission: { title, slug, modified, content, featured_media, categories },
}) => (
  <div>
    <AdmissionDetailHeader title={title} />
    <div className="short-bg text-md" style={{ color: '#193c6c' }}>
      <div
        className="container "
        style={{
          paddingTop: '1rem',
          paddingBottom: '80px',
          margin: 'auto',
          maxWidth: '960px',
        }}
      >
        <Breadcrumb tag="nav" listTag="div" className="t3">
          <BreadcrumbItem tag="a" href="/">
            Home
          </BreadcrumbItem>
          <BreadcrumbItem active tag="span">
            Admission
          </BreadcrumbItem>
          <BreadcrumbItem tag="a" href={categories[0].slug=="thai-education-system"? "/admission/category/thai-education-system":"/admission/category/international-certificate"}>
            {categories[0].slug=="thai-education-system"? "Thai Secondary School Certificate":"International Certificate"}
          </BreadcrumbItem>
          <BreadcrumbItem active tag="span">
            {title}
          </BreadcrumbItem>
        </Breadcrumb>
        <div className="row" style={{ display: 'flex' }}>
          <div className=" col-sm  dt1">
            <div style={{ maxWidth: '90vw', margin: 'auto' }}>
              <div
                className="dt1"
                style={{
                  display: 'flex',
                  justifyContent: '',
                  alignItems: 'center',
                }}
              >
                <img
                  src={require('../../images/icons/clock.png')}
                  style={{
                    width: 14,
                    height: 14,
                    marginBottom: 0,
                    marginRight: '5px',
                  }}
                />
                {moment().format('MMMM D, YYYY')}
              </div>
              <hr style={{ backgroundColor: '#193c6c' }} />
              {/* {_.get(featured_media, 'source_url') && (
              <img src={featured_media.source_url} alt={slug} />
            )} */}
            </div>
          </div>
          <div className=" col-lg-8 ">
            <div style={{ maxWidth: '90vw', margin: 'auto' }}>
              <div
                className="dt1"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default AdmissionDetail
