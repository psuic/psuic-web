import React, { Component } from 'react'
import CurriculumHeader from './CuriculumHeader'

class DMCuriculumContainer extends Component {
  state = {}
  render() {
    return (
      <div>
        <CurriculumHeader />
        <div className="default-bg text-md" style={{ color: '#193c6c' }}>
          <div className="container text-center">
            <div style={{ paddingTop: '80px' }}>
              <div className="text-xl text-hight-sm">PROGRAM OVERVIEW</div>
              <h5> PRINCE OF SONGKLA UNIVERSITY INTERNATIONAL COLLEGE</h5>
              <br />

              <div
                className="row"
                style={{ textAlign: 'justify', paddingBottom: 40 }}
              >
                <div className="col-sm" style={{ marginBottom: 40 }}>
                  <div className="text-bold">
                    Are you looking for a prospective future in Digital Media
                    Economy Age?
                  </div>
                  <br />
                  <div>
                    PSUIC combines Information Technology, Science and Arts to
                    offer a BACHELOR OF SCIENCE DEGREE IN DEGITAL MEDIA. Our
                    principle goal is to produce and place functional and
                    competent individuals into professional and competent
                    individuls into professional working environments within the
                    digital media industry. Armed with adequate proficiency and
                    prospects in tune with the international marketplace.
                  </div>
                  <br />
                  <div>
                    We offer a wide range of courses om which students can learn
                    and develop the essential skills for their chosen career
                    path. Throughout the 4-year study plan, our curriculum
                    covers the main subfields of the digital media industry.There are
                  </div>
                </div>
                <div className="col-sm" style={{ marginBottom: 40 }}>
                  <div>
                    1. ANIMATION & VISUAL EFFECTS: 2D/3D animation, motion
                    graphics, visual effects, etc.
                  </div>
                  <div>
                    2. INTERACTIVE MEDIA: website, application, and games.
                  </div>
                  <br />
                  <div>
                    Access to Advanced Computer Labs with well-known multimedia
                    software installed will be provided to our Digital Media
                    students along with other facilities such as Video
                    facilities, a Common Room and a Student Lounge to support
                    the excellence not only in teaching but also in student's
                    self-learning.
                  </div>
                  <br />
                  <div>
                    Graduates of the program will be trained with a combination
                    of expertise in Information Technology and Art that enables
                    them to pursue their career paths in Digital Media fi
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className=" staff-header"
            style={{
              width: '100%',
              height: "450px",
              objectFit: 'cover',
              color: 'white',
            }}
          >
            <img
              src={require('../../images/Alumni.png')}
              className="staff-header-image"
            />
            <img
              src={require('../../images/AlumniOpacity.png')}
              className="staff-header-image"
            />
            <div
              className="staff-header-textcontainer "
              style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:'center',width:"400px",height:"100%",right:"2vw",margin:"2vw",maxWidth:"95vw"}}
              // style={{ right: '15px', top: '15px' }}
            >
              <div className="text-center" >
                <div className=" text-header-title" style={{fontSize:"60px"}}>“</div>
                <div className="  " style={{maxWidth:"90vw",fontStyle:"italic"}}>
                  Actually, You don't need to be professional in
                  english. You just need to know some to be able to communicate and understand the class.
                </div>
                <br />
                <div className=" ">by Thongkorn Charoenphanich</div>
                <div>Alumni</div>
              </div>
            </div>
          </div>
          <div className=" text-center">
            <div className="map" style={{ paddingTop: '80px' }}>
              <div  className="text-xl text-hight-sm">TIMELINE</div>
              <h5> PRINCE OF SONGKLA UNIVERSITY INTERNATIONAL COLLEGE</h5>
              <br />

              <img
                src={require('../../images/timelineCuri.png')}
                style={{ width: '100%', height: '100%', objectFit: 'cover', paddingBottom: '80px',margin:0 }}
                className="lg"
              />
              <img
                src={require('../../images/timelineBobileCuri.png')}
                style={{ width: '100%', height: '100%', objectFit: 'cover',margin:0 ,paddingLeft:"3vw",paddingRight:"3vw"}}
                className="sm"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DMCuriculumContainer
