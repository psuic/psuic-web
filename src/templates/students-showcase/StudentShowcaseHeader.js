import React from 'react'
import StaticLogo from '../../components/StaticLogo'
import Link, { replace } from 'gatsby-link'
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import ScrollToDetail from '../../components/ScrollToDetailButton';


const StudentShowcaseHeader = props => {
  console.log(props)
  console.log(`/programs/${props.year}/student-showcase/${props.showcaseKey}`)
  const subcat = [
    {
      title: '1st year student',
      slug: `/programs/${props.year}/student-showcase/1st-year-student`,
      key: '1st-year-student',
    },
    {
      title: '2nd year student',
      slug: `/programs/${props.year}/student-showcase/2nd-year-student`,
      key: '2nd-year-student',
    },
    {
      title: '3rd year student',
      slug: `/programs/${props.year}/student-showcase/3rd-year-student`,
      key: '3rd-year-student',
    },
    {
      title: '4th year student',
      slug: `/programs/${props.year}/student-showcase/4th-year-student`,
      key: '4th-year-student',
    },
  ]
  return (
    <div className="menubar">
      <div className="lg">
        <div className="staff-header">
          <img
            src={require('../../images/banner/Showcase.png')}
            className="staff-header-image"
          />
          <img
            src={require('../../images/OpacityHeader.png')}
            className="staff-header-image"
          />
          <img
            src={require('../../images/banner/graphics/AdmissionDetail-Showcase.png')}
            className="staff-header-image"
          />
          <div>
            <div
              className="section-item-text-centered"
              style={{ width: '100%' }}
            >
              <div className="text-header-title">STUDENT SHOWCASE</div>
              <div className="text-header-sub">
                Prince of Songkla University International College
              </div>
              <div
                style={{
                  color: 'white',
                  textAlign: 'center',
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  alignItems:"center"
                }}
              >
                {props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm">
        <div className="mobile-header">
          <img
            src={require('../../images/banner/Showcase.png')}
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
              <div className="text-header-title">STUDENT SHOWCASE</div>
              <div className="text-header-sub">
                Prince of Songkla University International College
              </div>
                
              <div style={{width:"80%"}}>
                {_.map(subcat, (category, idx) => (
                  <React.Fragment>
                  <div
                    key={category.slug}
                    className="row center  text-header-sub "
                    style={{width:"100%"}}
                  >
                      <div
                        href={`#`}
                        className={' titleHeight'}
                        onClick={() =>  replace(category.slug)}
                        style={category.key === props.showcaseKey
                          ?{ width:"100%",color:"white",}:{width:"100%",opacity:0.8,}}
                      >
                        {category.title}
                      </div>

                      <hr
                        style={
                          category.key === props.showcaseKey
                            ? customStyle.hrSelecting : customStyle.hr
                        }
                      />
                  </div>
                  </React.Fragment>
                ))}
              </div>
              <div>


                {/* <Input
                  type="select"
                  name="select"
                  id="exampleSelect"
                  value={`/programs/${props.year}/student-showcase/${props.showcaseKey}`}
                  onChange={e => replace(e.target.value)}
                  style={{
                    backgroundColor: 'rgba(25, 60, 108, 0.5)',
                    color: 'white',
                    fontSize: '1.5rem',
                    padding: '5px',
                    height: 'auto',
                  }}
                >
                  {_.map(subcat, (item, idx) => {
                    return (
                      <option id="exampleText" key={idx} value={item.slug}>
                        {item.title}
                      </option>
                    )
                  })}
                </Input> */}
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

export default StudentShowcaseHeader

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
    width:"100%"
  },
  hrSelecting: {
    marginBottom: 5,
    marginTop: 5,
    borderColor: 'white',
    borderWidth: '2px',
    opacity: 1, width:"100%"

  },
}