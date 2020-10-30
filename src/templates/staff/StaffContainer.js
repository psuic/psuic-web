import React, { Component } from 'react'
import _ from 'lodash'
import StaffItem from './StaffItem'
import SectionContainer from '../../components/SectionContainer'
import StaffHeader from './StaffHeader'
import StaffItem2 from './StaffItem2'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'

// ##slug
// lecturer
// management
// staff-staff

const STAFF_CATEGORIES = [
  { name: 'Management', slug: 'management' },
  { name: 'Lecturer', slug: 'lecturer' },
  { name: 'Supporting Staff', slug: 'staff-staff' },
]

class StaffContainer extends Component {
  state = {
    currentStaffRef: 'management',
  }

  componentDidMount() {
    this.onSelectStaff(this.state.currentStaffRef)
  }

  onSelectStaff = currentStaffRef => {
    const currentStaffs = _.filter(this.props.staffs, edge => {
      return _.some(edge.node.categories, { slug: currentStaffRef })
    })
    this.setState({ currentStaffRef, currentStaffs })
  }
  render() {
    if (!this.state.currentStaffRef) return null
    console.log(this.state.currentStaffs)

    return (
      <div>
        <StaffHeader
          onSelectStaff={this.onSelectStaff}
          categories={STAFF_CATEGORIES}
          currentStaffRef={this.state.currentStaffRef}
        >
          {_.map(STAFF_CATEGORIES, (category, idx) => (
            <div
              key={category.slug}
              className="row center  text-header-sub"
              style={{ margin: 0 }}
            >
              {idx != 0 ? (
                <div
                  style={{
                    paddingLeft: '2vw',
                    paddingRight: '2vw',
                    color: 'white',
                  }}
                >
                  |
                </div>
              ) : null}
              <div className="link-container">
                <a
                  href={`#`}
                  className={'default-link text-header-sub '}
                  onClick={() => this.onSelectStaff(category.slug)}
                  style={{
                    transition: 'none',
                  }}
                >
                  {category.name}
                </a>

                <div
                  className={
                    category.slug === this.state.currentStaffRef
                      ? 'link-selecting'
                      : 'link-underline'
                  }
                />
              </div>
            </div>
          ))}
        </StaffHeader>
        <div className="short-bg " >
        <div style={{maxWidth:"90vw",margin:"auto"}} >
          <div
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
                About 
              </BreadcrumbItem>
              <BreadcrumbItem active tag="span">
                Staff 
              </BreadcrumbItem>
            </Breadcrumb>
            <div
              className="row "
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '',

                margin: 0,
              }}
            >
              {_.map(this.state.currentStaffs, edge => (
                <StaffItem2
                  key={edge.node.id}
                  title={edge.node.title}
                  {...edge.node.acf}
                  all={edge}
                />
              ))}
            </div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StaffContainer
