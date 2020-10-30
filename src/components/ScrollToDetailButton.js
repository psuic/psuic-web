import React, { Component } from 'react'
import * as Scroll from 'react-scroll'

const ScrollToDetail = () => {
  return (
    <React.Fragment>
      <Scroll.Link
        activeClass="active"
        to="ScrollDownTarget"
        spy={true}
        smooth={true}
        duration={500}
        className="btn btn-sm"
        style={{
          color: '#193c6c',
          borderWidth: 1,
          borderRadius: 1000,
          padding: 8,
          position: 'absolute',
          bottom: '2.4vw',
          height: '40px',
          width: '40px',
        }}
      >
        <img
          src={require('../images/arrow-down.png')}
          style={{
            height: 'auto',
            width: 'auto',
            marginBottom: null,
          }}
        />
      </Scroll.Link>
      <Scroll.Element name="ScrollDownTarget" className="element" />
  
    </React.Fragment>
  )
}

export default ScrollToDetail
