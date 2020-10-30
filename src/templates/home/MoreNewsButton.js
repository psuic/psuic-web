import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import moment from 'moment'
import Link from 'gatsby-link'
import Truncate from 'react-truncate'
import Slider from 'react-slick'
import { Container, Row, Col } from 'reactstrap'
const subcat = [
    {
      title: 'upcoming event',
      slug: '/news/category/upcoming-events',
      key: 'newsByUpcommingEvents',
    },
    {
      title: 'general news',
      slug: '/news/category/general-news',
      key: 'newsByGeneralNews',
    },
    {
      title: 'procurement news',
      slug: '/news/category/procurement-news',
      key: 'newsByProcurementNews',
    },
    {
      title: 'career opportunities',
      slug: '/news/category/career-oportioties',
      key: 'newsByCareerOportioties',
    },
  ]
const MoreNewsButton =({selecting})=>{


 return   <div className="center" style={{ marginTop: '40px' }}>
    <Link
      to={subcat[selecting].slug}
      // className="default-image-shadow"
      style={{
        // borderStyle: 'dash',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
        paddingLeft: '25px',
        paddingRight: '25px',
        borderWidth: '4px',
        borderRadius: '25px',
        height: '50px',
        // background: 'white',
        color: '#193c6c',
        textDecoration: 'none',
        borderColor: 'black',
        border: 'solid',
      }}
    >
      <div
      className="t2"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {_.upperCase(`All ${subcat[selecting].title}`)}{' '}
        <img
          src={require('../../images/icons/arrow-right-dark.png')}
          style={{
            width: 24,
            height: 24,
            marginBottom: 0,
            marginLeft: '10px',
          }}
        />
      </div>
    </Link>
  </div>
}

export default MoreNewsButton