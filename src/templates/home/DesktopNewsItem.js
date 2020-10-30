import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import moment from 'moment'
import Link from 'gatsby-link'
import Truncate from 'react-truncate'
import Slider from 'react-slick'
import { Container, Row, Col } from 'reactstrap'

const DeskTopNewsItem = ({ source_url, slug, title, short_description }) => {
  return (
    <Link
      className="col-md default-image-shadow"
      to={'/news/' + slug}
      style={{
        paddingLeft: '0px',
        paddingRight: '0px',
        borderRadius: '10px',
        backgroundColor: 'white',
        height: '300px',
        display: 'flex',
        flexDirection: 'column',
        color: '#193c6c',
        textDecoration: 'none',
      }}
    >
      <div style={{ width: '100%', height: '50%' }}>
        <img
          src={source_url}
          className="section-item-image"
          style={{
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
          }}
        />
      </div>
      <div style={{ padding: '20px', height: '50%' }}>
        <div
          style={{
            fontSize: '1.14em',
            lineHeight:"1.2rem",
            fontWeight: '600',
            color: '#193c6c',
          }}
        >
          <Truncate lines={2}  ellipsis={<span>...</span>}>
            {title}
          </Truncate>
        </div>
        <div style={{marginTop:10}} className="t3">
          <Truncate lines={2} ellipsis={<span>...</span>}>
            {short_description}
          </Truncate>
        </div>
        <div
          style={{
            position: 'absolute',
            right: '20px',
            bottom: '20px',
          }}
        >
          <div
            style={{
              fontSize: '1rem',
              fontWeight: '600',
              color: '#193c6c',
              cursor: 'pointer',
              textDecoration: 'none',
              lineHeight: '10px',
            }}
          >
            READ MORE
          </div>
        </div>
      </div>
    </Link>
  )
}
export default DeskTopNewsItem
