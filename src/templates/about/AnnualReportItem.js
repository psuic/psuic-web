import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Truncate from 'react-truncate'

export default function AnnualReportItem(data) {
  console.log(data)

  return (
    // <div>{JSON.stringify(data)}</div>
    <div className="" style={{ padding: 10 }}>
      <a href={data.acf.link} target="_blank" rel="noopener noreferrer">
        <div
          className="staff-container container p-0"
          style={{ width: 274, height: 386 }}
          href="/"
        >
          <img
            src={data.acf.image.source_url}
            alt="Avatar"
            className="staff-image  default-image-shadow"
          />
        </div>
      </a>
      <div style={{ textAlign: 'center', fontWeight: 'bold', padding: '5px' }}>
        {data.title}
      </div>
    </div>
  )
}

AnnualReportItem.propType = {
  title: PropTypes.string,
  acf: PropTypes.shape({
    image: PropTypes.object.isRequired,
    link: PropTypes.string.isRequired,
  }),
}
