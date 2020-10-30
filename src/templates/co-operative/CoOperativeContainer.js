import React, { Component } from 'react'
import CoOperativeHeader from './CoOperativeHeader'

class CoOperativeContainer extends Component {
  state = {}

  render() {
    return (
      <div>
        <CoOperativeHeader />
        <div className="default-bg text-small" style={{ color: '#193c6c' }}>
          <div
            className="container"
            style={{ paddingTop: 80, paddingBottom: 80 }}
          >
            <div className="text-center">
             
              <div className="text-xl text-hight-sm">WORK TRAINING OPTIONS</div>
              <h5> PRINCE OF SONGKLA UNIVERSITY INTERNATIONAL COLLEGE</h5>
              <br />
            </div>
            <div className="row center" style={{ paddingTop: 40 }}>
              <CoOpItem title="COOPERATIVE EDUCATION">
                <h4>6 Credits</h4>
                <h4>16 Weeks</h4>
                <h4>Year 4 in Semester 1</h4>
              </CoOpItem>
              <CoOpItem title="INTERNSHIP">
                <h4>Non-Credits</h4>
                <h4>300 Hours</h4>
                <h4>Summer and 2 Elective Courses</h4>
              </CoOpItem>
            </div>
            <div className="text-center" style={{ paddingTop: 40 }}>
              
              <div className="text-xl text-hight-sm">PARTNER COMPANIES</div>
              <h5> PRINCE OF SONGKLA UNIVERSITY INTERNATIONAL COLLEGE</h5>
              <br />
            </div>
            <div className="row container center">
              <div className="center-point-shadow center logo-circle">
                <img
                  src={require('../../images/logos/logo4.png')}
                  style={{ padding: 30, marginBottom: 0 }}
                />
              </div>
              <div className="center-point-shadow center logo-circle">
                <img
                  src={require('../../images/logos/logo2.png')}
                  style={{ padding: 30, marginBottom: 0 }}
                />
              </div>
              <div className="center-point-shadow logo-circle">
                <img
                  src={require('../../images/logos/logo1.png')}
                  style={{ padding: 30 }}
                />
              </div>
              <div className="center-point-shadow center logo-circle">
                <img
                  src={require('../../images/logos/logo3.png')}
                  style={{ padding: 30, marginBottom: 0 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CoOperativeContainer

const CoOpItem = ({ children, title }) => (
  <div className="">
    <div
      className="outer-tranning-card col-md center-point-shadow rounded-img center "
      style={{
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 40,
        padding: 15,
      }}
    >
      <div
        className="rounded-img center-point-shadow "
        style={{
          backgroundColor: 'white',
          width: '100%',
          height: '100%',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '50%',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%',
            }}
          >
            <h1 style={{ color: 'white', fontWeight: 'bold',textAlign:"center" }}>{title}</h1>
          </div>
          <img
            className="card-img-top"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              marginBottom: '0',
            }}
            src={require('../../images/Cooption.png')}
          />
        </div>
        <div
          className="center text-center"
          style={{
            width: '100%',
            height: '50%',
            flexDirection: 'column',
          }}
        >
          {children}
          {/* <h4>Non-Credits</h4>
                      <h4>300 Hours</h4>
                      <h4>Summer and 2 Elective Cources</h4> */}
        </div>
      </div>
    </div>
  </div>
)
