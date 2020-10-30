import React, { Component } from 'react'
import StudentShowcaseHeader from './StudentShowcaseHeader'
import Gallery from '../../components/Gallery'
import Link from 'gatsby-link'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import StackGrid, { transitions, easings } from 'react-stack-grid'

const AdmissionHeaderCategoryTitle = ({ target, currentSlug, title }) => {
  if (target == currentSlug)
    return (
      <div
        className="link-container"
        style={{ paddingLeft: '2vw', paddingRight: '2vw' }}
      >
        <span className="text-header-sub" > {title} </span>{' '}
        <div className="link-selecting" />{' '}
      </div>
    )
  else
    return (
      <div
        className="link-container"
        style={{ paddingLeft: '2vw', paddingRight: '2vw' }}
      >
        <span className="text-header-sub" > {title} </span> <div className="link-underline" />
      </div>
    )
}
class StudentShowcase extends Component {
  state = {
    lightboxIsOpen: true,
    currentImage: 0,
  }

  render() {
    const transition = transitions.scaleDown;
    const { title, content, gallery_images, video_link, slug } = this.props.data
   console.log(this.props);
   
    return (
      <div>
        <StudentShowcaseHeader showcaseKey={_.get(this.props, 'data.slug')} year={_.get(this.props, 'data.categories[0].slug')}>
          <div className="text-header-sub row">
            <Link
              to={`/programs/${_.get(this.props,'data.categories[0].slug')}/student-showcase/1st-year-student/`}
              className="default-link "
              >
              <AdmissionHeaderCategoryTitle
                currentSlug={slug}
                target="1st-year-student"
                title="1st year student"
                />
            </Link>

            <span style={{ color: 'white' }}> | </span>
            <Link
              to={`/programs/${_.get(this.props,'data.categories[0].slug')}/student-showcase/2nd-year-student/`}
              className="default-link"
              >
              <AdmissionHeaderCategoryTitle
                currentSlug={slug}
                target="2nd-year-student"
                title="2nd year student"
              />
            </Link>
            <span style={{ color: 'white' }}> | </span>
            <Link
              to={`/programs/${_.get(this.props,'data.categories[0].slug')}/student-showcase/3rd-year-student/`}
              className="default-link"
            >
              <AdmissionHeaderCategoryTitle
                currentSlug={slug}
                target="3rd-year-student"
                title="3rd year student"
              />
            </Link>
            <span style={{ color: 'white' }}> | </span>
            <Link
              to={`/programs/${_.get(this.props,'data.categories[0].slug')}/student-showcase/4th-year-student/`}
              className="default-link"
            >
              <AdmissionHeaderCategoryTitle
                currentSlug={slug}
                target="4th-year-student"
                title="4th year student"
              />
            </Link>
          </div>
        </StudentShowcaseHeader>
        <div className="default-bg text-md center" style={{ color: '#193c6c',flexDirection:"column" }}>
          <div className="container text-center" style={{ maxWidth: '960px',}}>
            
            <div style={{ paddingTop: "1rem" }}>
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
              <h5>PROGRAM</h5>
              <div
                className="text-xl text-hight-sm"
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <h5> PRINCE OF SONGKLA UNIVERSITY INTERNATIONAL COLLEGE</h5>
            </div>
          </div>
          <br />
          <div className="container text-center center " style={{flexDirection:"column"}}>
            {video_link ? (
              <div style={{ width: '100%', height: '40vw', paddingBottom: 10, maxWidth: '960px'}}>
                <iframe
                  width="100%"
                  height="100%"
                  src={video_link}
                  frameBorder=""
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
            ) : null}
            <div style={{  paddingTop: 40 }} >
              <hr  />
            </div>
          </div>
          <div
            style={{ borderWidth: 50, maxWidth: '960px', }}
            className="container dt1"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <div
            className="container"
            style={{ paddingTop: 40, paddingBottom: 80 }}
          >
            <Gallery
              images={_.map(gallery_images, ({ caption, imageUrl }, i) => ({
                src: imageUrl,
                thumbnail: imageUrl,
                caption,
              }))}
              showThumbnails
            />
          </div>
        </div>
      </div>
    )
  }
}

export default StudentShowcase
