import React, { Component } from 'react'
import Link from 'gatsby-link'

const StaticLogo = ({ dark }) => {
  return (
    <div          style={{
      background: '#193c6c80',
      height: '60px',
      position: 'fixed',
      zIndex: 5,
      width: '100%',
      paddingLeft: '5vw',
      paddingRight: '5vw',
      top:0
    }}>

    <div
      style={{
        //top:"36px",
        top: '2.4vw',
        left: '5vw',
        position: 'fixed',
        minWidth: '150px',
        width: '20vw',
        zIndex: 4,
        // height: '7vw',
      }}
    >
      {dark ? (
        <Link to="/">
          <img
            src={require('../images/logoHome.png')}
            style={{ objectFit: 'contain', margin: 0 }}
          />
        </Link>
      ) : (
        <Link to="/">
          <img
            src={require('../images/logoFooter.png')}
            style={{ objectFit: 'contain', margin: 0 }}
          />
        </Link>
    )}
    </div>
    </div>
  )
}

export default StaticLogo
