import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import moment from 'moment'
import Link from 'gatsby-link'
import Truncate from 'react-truncate'
import Slider from 'react-slick'
import { Container, Row, Col } from 'reactstrap'
import MobileNewsItem from './MobileNewsItem'
import MoreNewsButton from './MoreNewsButton'
import DeskTopNewsItem from './DesktopNewsItem'

const subcat = [
  {
    title: 'upcoming event',
    slug: '/news/category/upcoming-events',
    key: 'newsByUpcommingEvents',
  },
  {
    title: 'General News',
    slug: '/news/category/general-news',
    key: 'newsByGeneralNews',
  },
  {
    title: 'Procurement News',
    slug: '/news/category/procurement-news',
    key: 'newsByProcurementNews',
  },
  {
    title: 'Career Opportunities',
    slug: '/news/category/career-opportunities',
    key: 'newsByCareerOpportunities',
  },
]
export default class HomeNewsSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selecting: 0,
      showing: this.props.newsSection.newsByUpcommingEvents,
    }
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    })
  }

  render() {
    const settings = {
      className: 'center slider variable-width',
      infinite: true,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      centerPadding: '60px',
      focusOnSelect: true,
      arrows: false,
    }
    const secontsettings = {
      //className: 'center slider variable-width',
      // dots: true,
      //infinite: true,
      //centerMode: true,
      //slidesToShow: 1,
      //centerPadding: '60px',
      //slidesToScroll: 1,
      //variableWidth: true,

      slidesToShow: 1,
      slidesToScroll: 1,
    }
    const { newsSection } = this.props
    const { showing } = this.state
    console.log(this.state.selecting)
    console.log(this.state.showing)
    const {
      newsByUpcommingEvents,
      newsByProcurementNews,
      newsByGeneralNews,
      newsByCareerOpportunities,
    } = this.props.newsSection
    return (
      <div className="menubar">
        <div className="lg">
          <div className="center row" style={{ marginBottom: '20px' }}>
            {_.map(subcat, (item, idx) => {
              return (
                <div
                  key={idx}
                  style={{ padding: '10px', cursor: 'pointer' }}
                  className="link-container"
                  onClick={() => {
                    this.setState({
                      selecting: idx,
                      showing: newsSection[item.key],
                    })
                  }}
                >
                  <div>{_.upperCase(item.title)}</div>
                  <div
                    className=" link-underline"
                    style={
                      idx == this.state.selecting
                        ? { width: '80%', background: '#193c6c' }
                        : { background: '#193c6c' }
                    }
                  />
                </div>
              )
            })}
          </div>
          <div className="menubar row">
            {/* {JSON.stringify(newsSection)} */}
            <div className="col-md-9" style={{ background: '' }}>
              <Row>
                {_.get(this.state, 'showing[0]') ? (
                  <Link
                    to={'/news/' + _.get(this.state, 'showing[0].slug')}
                    className="col-md-12 default-image-shadow"
                    style={{
                      paddingLeft: '0px',
                      paddingRight: '0px',
                      borderRadius: '10px',
                      backgroundColor: 'white',
                      height: '200px',
                      display: 'flex',
                      marginBottom: '20px',
                      color: '#193c6c',
                      textDecoration: 'none',
                    }}
                  >
                    <div style={{ width: '50%', height: '100%' }}>
                      <img
                        src={_.get(
                          this.state,
                          'showing[0].acf.thumbnail_image.source_url'
                        )}
                        className="section-item-image"
                        style={{
                          borderTopLeftRadius: '10px',
                          borderBottomLeftRadius: '10px',
                        }}
                      />
                    </div>
                    <div style={{ padding: '20px', width: '50%' }}>
                      <div
                        style={{
                          fontSize: '1.14em',
                          fontWeight: '600',
                          color: '#193c6c',
                          lineHeight: '1.2rem',
                        }}
                      >
                        <Truncate lines={2} ellipsis={<span>...</span>}>
                          {_.get(this.state, 'showing[0].title')}
                        </Truncate>
                      </div>
                      <div style={{ marginTop: 10 }} className="t3">
                        <Truncate lines={2} ellipsis={<span>...</span>}>
                          {_.get(
                            this.state,
                            'showing[0].acf.short_description'
                          )}
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
                ) : null}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                  }}
                >
                  {_.get(this.state, 'showing[1]') ? (
                    <DeskTopNewsItem
                      source_url={_.get(
                        this.state,
                        'showing[1].acf.thumbnail_image.source_url'
                      )}
                      slug={_.get(this.state, 'showing[1].slug')}
                      title={showing[1].title}
                      short_description={_.get(
                        this.state,
                        'showing[1].acf.short_description'
                      )}
                    />
                  ) : null}
                  <div style={{ width: '20px', height: '20px' }} />
                  {_.get(this.state, 'showing[2]') ? (
                    <DeskTopNewsItem
                      source_url={_.get(
                        this.state,
                        'showing[2].acf.thumbnail_image.source_url'
                      )}
                      slug={_.get(this.state, 'showing[2].slug')}
                      title={showing[2].title}
                      short_description={_.get(
                        this.state,
                        'showing[2].acf.short_description'
                      )}
                    />
                  ) : null}
                  <div style={{ width: '20px', height: '20px' }} />

                  {_.get(this.state, 'showing[3]') ? (
                    <DeskTopNewsItem
                      source_url={_.get(
                        this.state,
                        'showing[3].acf.thumbnail_image.source_url'
                      )}
                      slug={_.get(this.state, 'showing[3].slug')}
                      title={showing[3].title}
                      short_description={_.get(
                        this.state,
                        'showing[3].acf.short_description'
                      )}
                    />
                  ) : null}
                </div>
              </Row>
            </div>
            <div className="col-md-3 lg" style={{ paddingLeft: '20px' }}>
              <div style={{ fontWeight: 'bold' }}>Lasted News</div>

              {_.map(newsSection.allNews, (item, idx) => {
                return (
                  <Link
                    key={idx}
                    to={'/news/' + item.slug}
                    style={{ color: '#193c6c', textDecoration: 'none' }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: '1.14em',
                          lineHeight: '1.2rem',
                          fontWeight: '600',
                          color: '#193c6c',
                          paddingTop:"5px",
                          paddingBottom:"5px"
                        }}
                      >
                          {item.title}
                      </div>
                      <div className="t3" style={{ lineHeight: '1' }}>
                        {moment(item.modified).format('DD MMMM YYYY')}
                      </div>
                      {/* TODO: เช็กกับออน */}
                      {/* {newsSection.allNews.length != idx + 1 ? <div style={{marginTop:"2rem"}} /> : null} */}
                      {newsSection.allNews.length != idx + 1 ? <hr /> : null}
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
          <MoreNewsButton selecting={this.state.selecting} />
        </div>
        <div className="sm">
          <Slider
            //className="center slide variable-width"
            //centerMode
            style={{paddingLeft:0,paddingRight:0}}
            asNavFor={this.state.nav2}
            ref={slider => (this.slider1 = slider)}
            //slidesToShow={3}
            //focusOnSelect
            //infinite
            //centerPadding={"0px"}

            //variableWidth
            //center
            {...settings}
          >
            {_.map(subcat, (item, idx) => {
              return (
                <div
                  key={idx}
                  //style={{ width: 70 }}
                >
                  <div
                    className="t2"
                    style={{
                      textAlign: 'center',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '10px',
                    }}
                  >
                    {_.upperCase(item.title)}
                  </div>
                </div>
              )
            })}
          </Slider>
          <div style={{ width: '95%', margin: 'auto',marginTop:"1rem" }}>
            <Slider
              // centerMode
              asNavFor={this.state.nav1}
              ref={slider => (this.slider2 = slider)}
              //slidesToShow={1}
              //swipeToSlide={true}
              //focusOnSelect={true}
              {...secontsettings}
            >
              <div>
                {_.get(newsByUpcommingEvents, 0) ? (
                  <MobileNewsItem showing={_.get(newsByUpcommingEvents, 0)} />
                ) : null}
                {_.get(newsByUpcommingEvents, 1) ? (
                  <MobileNewsItem showing={_.get(newsByUpcommingEvents, 1)} />
                ) : null}
                {_.get(newsByUpcommingEvents, 2) ? (
                  <MobileNewsItem showing={_.get(newsByUpcommingEvents, 2)} />
                ) : null}
                {_.get(newsByUpcommingEvents, 3) ? (
                  <MobileNewsItem showing={_.get(newsByUpcommingEvents, 3)} />
                ) : null}
                <MoreNewsButton selecting={0} />
              </div>
              <div>
                {_.get(newsByGeneralNews, 0) ? (
                  <MobileNewsItem showing={_.get(newsByGeneralNews, 0)} />
                ) : null}
                {_.get(newsByGeneralNews, 1) ? (
                  <MobileNewsItem showing={_.get(newsByGeneralNews, 1)} />
                ) : null}
                {_.get(newsByGeneralNews, 2) ? (
                  <MobileNewsItem showing={_.get(newsByGeneralNews, 2)} />
                ) : null}
                {_.get(newsByGeneralNews, 3) ? (
                  <MobileNewsItem showing={_.get(newsByGeneralNews, 3)} />
                ) : null}
                <MoreNewsButton selecting={1} />
              </div>
              <div>
                {_.get(newsByProcurementNews, 0) ? (
                  <MobileNewsItem showing={_.get(newsByProcurementNews, 0)} />
                ) : null}
                {_.get(newsByProcurementNews, 1) ? (
                  <MobileNewsItem showing={_.get(newsByProcurementNews, 1)} />
                ) : null}
                {_.get(newsByProcurementNews, 2) ? (
                  <MobileNewsItem showing={_.get(newsByProcurementNews, 2)} />
                ) : null}
                {_.get(newsByProcurementNews, 3) ? (
                  <MobileNewsItem showing={_.get(newsByProcurementNews, 3)} />
                ) : null}
                <MoreNewsButton selecting={2} />
              </div>
              <div>
                {_.get(newsByCareerOpportunities, 0) ? (
                  <MobileNewsItem showing={_.get(newsByCareerOpportunities, 0)} />
                ) : null}
                {_.get(newsByCareerOpportunities, 1) ? (
                  <MobileNewsItem showing={_.get(newsByCareerOpportunities, 1)} />
                ) : null}
                {_.get(newsByCareerOpportunities, 2) ? (
                  <MobileNewsItem showing={_.get(newsByCareerOpportunities, 2)} />
                ) : null}
                {_.get(newsByCareerOpportunities, 3) ? (
                  <MobileNewsItem showing={_.get(newsByCareerOpportunities, 3)} />
                ) : null}
                <MoreNewsButton selecting={3} />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    )
  }
}

HomeNewsSection.propTypes = {
  newsSection: PropTypes.shape({
    allNews: PropTypes.array,
    newsByUpcommingEvents: PropTypes.array,
    newsByGeneralNews: PropTypes.array,
    newsByCareerOpportunities: PropTypes.array,
    newsByProcurementNews: PropTypes.array,
  }),
}
