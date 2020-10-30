import React from 'react'
import _ from 'lodash'
import Link from 'gatsby-link'
import Truncate from 'react-truncate'
import moment from 'moment'

const NewsItem = ({ new: { title, modified, slug, featured_media, acf } }) => (
  <div
    className="col-md-auto"
    style={{ flexGrow: '0', padding: 10, paddingTop: 0, paddingBottom: 20 }}
  >
    <Link to={`/news/${slug}`} style={{ textDecoration: 'none' }}>
      <div
        className="card container p-0 default-image-shadow "
        style={{
          width: '15rem',
          border: '0px',
          height: '350px',
          borderRadius: '0.5rem',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '50%',
          }}
        >
          <img
            className="card-img-top"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              marginBottom: '0',
              borderTopLeftRadius: '0.5rem',
              borderTopRightRadius: '0.5rem',
            }}
            src={
              acf
                ? acf.thumbnail_image.source_url
                : require('../../images/test4.jpg')
            }
            alt={slug}
          />
        </div>

        <div style={{ padding: '20px' }}>
          <div style={{ height: '50%', width: '100%' }}>
            <h5
              style={{ color: '#193c6c' }}
              className="card-title text-bold text-hight-sm"
            >
              {title}
            </h5>
            {/* <div style={{lineHeight:"1"}}>{moment(modified).format("DD/MM/YYYY")}</div> */}
            <div
              className="t3"
              style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
            >
              <Truncate lines={2} ellipsis={<span>...</span>}>
                {acf.short_description}
              </Truncate>
            </div>

            <div
              style={{ position: 'absolute', right: '20px', bottom: '10px' }}
            >
              <div
                style={{
                  fontSize: 20,
                  fontWeight: '600',
                  color: '#193c6c',
                  cursor: 'pointer',
                  textDecoration: 'none',
                }}
              >
                READ MORE
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  </div>
)

export default NewsItem

// <div>
// <h1>{title}</h1>
// {/* <small>{modified}</small> */}

// {_.get(featured_media, 'source_url') && (
//   <img src={featured_media.source_url} alt={slug} />
// )}

// {acf.short_description && (
//   <div dangerouslySetInnerHTML={{ __html: acf.short_description }} />
// )}

// <Link to={`/admission/${slug}`}>READ MORE</Link>

// <hr />
// </div>
