import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import moment from 'moment'
import Link from 'gatsby-link'
import Truncate from 'react-truncate'
import Slider from 'react-slick'
import { Container, Row, Col } from 'reactstrap'

const MobileNewsItem = ({ showing }) => {
  return (
    <div style={{margin:"2.5%",marginTop:"0px",marginBottom:"10px"}}>

    <Link
      className="col-md default-image-shadow"
      to={'/news/' + showing.slug}
      style={{
        paddingLeft: '0px',
        paddingRight: '0px',
        borderRadius: '10px',
        backgroundColor: 'white',
        height: '300px',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        color: '#193c6c',
        textDecoration: 'none',
      }}
      >
      <div style={{ width: '100%', height: '50%' }}>
        <img
          src={showing.acf.thumbnail_image.source_url}
          className="section-item-image"
          style={{
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
          }}
          />
      </div>
      <div style={{ padding: '20px', height: '50%' }}>
        <div
          className="t1"
          style={{
            fontWeight: '600',
            color: '#193c6c',
            lineHeight:"1.2rem",
          }}
          >
          <Truncate lines={2} ellipsis={<span>...</span>}>
            {showing.title}
          </Truncate>
        </div>
        <div style={{marginTop:10}} className="t3">
          <Truncate lines={2} ellipsis={<span>...</span>}>
            {showing.acf.short_description}
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
            </div>
  )
}
export default MobileNewsItem
