import React, { Component } from 'react'
import Map from './Map'
import { animateScroll as scroll } from 'react-scroll'

const Footer = () => {
  return (
    <div className="text-sm">
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          minHeight: '',
          position: 'relative',
        }}
      >
        <div className="col-lg-7 p-0" style={{ minHeight: '40vh' }}>
          <Map />
        </div>
        <div
          className="col-lg-5 p-0"
          style={{
            backgroundColor: '#3f6cb3',
            minHeight: '10rem',
            color: 'white',
          }}
        >
          <div className="">
            <div style={{ padding: '10%' }}>
              <img
                src={require('../images/logoFooter.png')}
                style={{ width: 250, height: 'auto', marginBottom: 10 }}
              />

              <div className="row">
                {/* <div className="col-md text-small">
                  <div>
                    <div>
                      PRINCE OF SONGKLA UNIVERSITY INTERNATIONAL COLLEGE (HATYAI
                      CAMPUS)
                    </div>
                    <br />
                    <div>contact us</div>
                  </div>
                </div> */}
                {/* TODO: เช็ก */}
                <div className="col-md text-sm" style={{ textAlign: 'left' }}>
                  <div style={{ lineHeight: '1.5rem' }} className="t1">
                    <br />
                    <div>
                      Prince of Songkla University International College
                    </div>
                    <div>12th floor, Learning Resource Center (LRC)</div>
                    <div>15 Kanjanvanich Road, Hat Yai, Songkhla 90110 </div>
                    <br />

                    <div
                      className="row col-md "
                      style={{ alignItems: 'center' }}
                    >
                      <img
                        src={require('../images/icons/old-handphone.png')}
                        style={{
                          width: 14,
                          height: 14,
                          marginBottom: 0,
                          marginRight: '5px',
                        }}
                      />
                      <div> 66 (0) 7428 2831, 66 (0) 7428 9404</div>
                    </div>
                    <div
                      className="row col-md "
                      style={{ alignItems: 'center' }}
                    >
                      <img
                        src={require('../images/icons/black-envelope.png')}
                        style={{
                          width: 14,
                          height: 14,
                          marginBottom: 0,
                          marginRight: '5px',
                        }}
                      />
                      <div>psuic-info@psu.ac.th</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            scroll.scrollToTop()
            //window.scrollTo(0, 0)
          }}
          className="btn btn-sm"
          style={{
            borderColor: '#fff',
            backgroundColor: '#3f6cb3',
            color: '#193c6c',
            borderWidth: 1,
            borderRadius: 1000,
            padding: 8,
            position: 'absolute',
            right: '2.4vw',
            bottom: '2.4vw',
            height: '40px',
            width: '40px',
          }}
        >
          <img
            src={require('../images/arrow-up.png')}
            style={{ height: 'auto', width: 'auto', marginBottom: null }}
          />
        </button>
      </div>
      <footer
        className="page-footer  text-1vw menubar"
        style={{ backgroundColor: '#193c6c' }}
      >
        <div className="footer-copyright  p-3 lg" style={{ color: 'white' }}>
          <div
            className="row"
            style={{
              //justifyContent: 'space-around',
              paddingLeft: '3vw',
              paddingRight: '3vw',
              alignItems: 'center',
            }}
          >
            <div
              className="col-md"
              style={{
                fontSize: '18px',
                alignItems: 'center',
                display: 'flex',
              }}
            >
              © 2018 PRINCE OF SONGKLA UNIVERSITY INTERNATIONAL COLLEGE
            </div>
            <div
              className="col-md row "
              style={{ justifyContent: 'flex-end', alignItems: 'center' }}
            >
              <a
                href="http://www.uic.psu.ac.th/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require('../images/icons/grid-world.png')}
                  style={{
                    width: '1.4rem',
                    height: '1.4rem',
                    marginBottom: 0,
                    marginRight: '20px',
                  }}
                />
              </a>
              <a
                href="https://www.instagram.com/psuic/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require('../images/icons/instagram.png')}
                  style={{
                    width: '1.4rem',
                    height: '1.4rem',
                    marginBottom: 0,
                    marginRight: '20px',
                  }}
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCaS7JbA4DzMAiHqbKDKzvXg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require('../images/icons/youtube.png')}
                  style={{
                    width: '1.4rem',
                    height: '1.4rem',
                    marginBottom: 0,
                    marginRight: '20px',
                  }}
                />
              </a>
              <a
                href="https://www.facebook.com/PSUInternationalCollege/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require('../images/icons/facebook.png')}
                  style={{
                    width: '1.4rem',
                    height: '1.4rem',
                    marginBottom: 0,
                    marginRight: '0px',
                  }}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="sm">
          <div
            style={{
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
            }}
          >
            <div
              style={{
                fontSize: '18px',
                justifyContent: 'center',
                textAlign: 'center',
                marginBottom: '10px',
              }}
            >
              © 2018 PRINCE OF SONGKLA UNIVERSITY INTERNATIONAL COLLEGE
            </div>
            <div className="row " style={{ justifyContent: 'center' }}>
              <a
                href="http://www.uic.psu.ac.th/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require('../images/icons/grid-world.png')}
                  style={{
                    width: '1.4rem',
                    height: '1.4rem',
                    marginBottom: 0,
                    marginRight: '20px',
                  }}
                />
              </a>
              <a
                href="https://www.instagram.com/psuic/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require('../images/icons/instagram.png')}
                  style={{
                    width: '1.4rem',
                    height: '1.4rem',
                    marginBottom: 0,
                    marginRight: '20px',
                  }}
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCaS7JbA4DzMAiHqbKDKzvXg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require('../images/icons/youtube.png')}
                  style={{
                    width: '1.4rem',
                    height: '1.4rem',
                    marginBottom: 0,
                    marginRight: '20px',
                  }}
                />
              </a>
              <a
                href="https://www.facebook.com/PSUInternationalCollege/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require('../images/icons/facebook.png')}
                  style={{
                    width: '1.4rem',
                    height: '1.4rem',
                    marginBottom: 0,
                    marginRight: '0px',
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
