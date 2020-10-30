import React, { Component } from 'react'
import HistoryHeader from './HistoryHeader'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'

class HistoryContainer extends Component {
  state = {}
  render() {
    return (
      <div>
        <HistoryHeader />
        <div className="default-bg text-md" style={{ color: '#193c6c' }}>
          <div
            className="container"
            style={{
              marginRight: 'auto',
              marginLeft: 'auto',
              minHeight: '60vh',
              paddingTop: '1rem',
              marginBottom: '40px',
              maxWidth: '960px',
            }}
          >
            <Breadcrumb tag="nav" listTag="div" className="t3">
              <BreadcrumbItem tag="a" href="/">
                Home
              </BreadcrumbItem>
              {/* <BreadcrumbItem active tag="span">
                About
              </BreadcrumbItem> */}
              <BreadcrumbItem active tag="span">
                History
              </BreadcrumbItem>
            </Breadcrumb>
            <div className="row">
              <div
                className="col-lg"
                style={{ width: '100%', height: '750px', marginBottom: 80 }}
              >
                <img
                  src={require('../../images/lrc.jpg')}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  className="rounded-img default-image-shadow"
                />
              </div>
              <div className="col-lg" style={{ marginBottom: 40 }}>
                <div className="text-center">
                  <div className="text-hight-sm">ABOUT US</div>
                  <div className="text-xl text-hight-sm">PSUIC</div>
                  <div className="text-hight-sm"> PRINCE OF SONGKLA UNIVERSITY INTERNATIONAL COLLEGE</div>
                </div>
                <br />
                <div
                  className=" container dt1"
                  style={{ textAlign: 'justify' }}
                >
                  <div className="">
                    Many of the significant changes in higher education in
                    Thailand over the last fifteen years have taken place as a
                    result of shifts in government policy towards education
                    (Office of the Education Council, 2004). In creating the
                    UIC, these policy changes must be embraced and a number of
                    other important factors also have to be taken into account
                    English will be the medium of instruction and this will have
                    critical implications for the recruitment of both staff and
                    students as well as the way in which UIC’s programs are
                    delivered. When locating the proposed college PSU’s status
                    as a multi-campus University must be taken into account.
                  </div>
                  <br />
                  <div className="">
                    The College can act as a means of enhancing the university’s
                    national and international standing, and emphasis needs to
                    be placed on fields of study and niche subjects that are
                    peculiar to Southern Thailand.
                  </div>
                  <br />
                  <div className="">
                    {' '}
                    While this latter strategy should ensure that the UIC will
                    give added value to PSU, it will require planning that takes
                    into account the current educational, economic and social
                    background. Recent Government-driven changes in higher
                    education in Thailand provide windows of opportunity for
                    Prince of Songkla University: the proposed UIC should be
                    seen as a means of exploiting those opportunities.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container text-center ">
            <div className="text-hight-sm">ABOUT US</div>
            <div className="text-xl text-hight-sm">LOGO AND FLOWER </div>
            <div> PRINCE OF SONGKLA UNIVERSITY INTERNATIONAL COLLEGE</div>
            <br />
            <div
              className="row"
              style={{ textAlign: 'justify', paddingBottom: 40 }}
            >
              <div className="col-md dt1 " style={{ marginBottom: 40 }}>
                <div style={{ fontWeight: 'bold' }}>LOGO</div>
                <div className="">
                  A white cubic box with its opened blue lid, labelled with
                  letters ‘PSUIC’ (the abbreviation of Prince of Songkla
                  University International College)
                </div>
                <br />
                <div style={{ fontWeight: 'bold' }}>Meaning:</div>
                <div className="">
                  The cubic box represents the students of PSUIC who keep pace
                  with the modern age and fast-forwarding IT technology. The
                  ‘opened lid’ implies the welcoming of new knowledge and
                  readiness to learn at any time. The ‘open box’ is selected to
                  portray the idea of ‘thinking outside the box’. This emblem
                  could also be interpreted as a graduation cap which represents
                  the successful academic achievement.{' '}
                </div>
                <br />
                <div style={{ fontWeight: 'bold' }}>Corporate Colours:</div>
                <div className="">
                  {' '}
                  PSUIC adopts PSU Dark Blue to match with our Pearl Silver
                  colour. The combination of these two colours represents PSUIC
                  identity.
                </div>
                <img
                  src={require('../../images/logoPSUIC.png')}
                  style={{
                    width: 'auto',
                    height: '150px',
                    objectFit: 'contain',
                    marginTop: 14,
                  }}
                  className=""
                />
              </div>
              <div className="col-md dt1" style={{ marginBottom: 40 }}>
                <div style={{ fontWeight: 'bold' }}>CAPE LEADWORT</div>
                <div className="">
                  The “Blue” of The Royal Cape (Dark Blue or Imperial Blue Cape
                  Leadwort) was His Majesty King Bhumibol Adulyadej’s favorite
                  blue as it represents Her Majesty Queen Sirikit’s birthday
                  colour (Friday) . Since our Prince of Songkla University
                  official color is also blue, it is an auspicious occasion to
                  use the Royal Cape as our International College’s emblem
                  flower. In nature, this beautiful flower is not a
                  hard-to-please or vulnerable flower as its look. Rather once
                  rooted, it is drought-tolerant, easy to grow, requires minimal
                  basic needs, little water and care.
                </div>
                <br />
                <div className="">
                  We places Cape Leadwort as our representing flower for the
                  mixture of blue and silver colours of its velvety petals. A
                  little bouquet of cape leadwort symbolizes the harmonization
                  of gentleness and fortitude. The flower can bloom lively on
                  any land. It paints its silvery blue around the world. PSUIC
                  wishes our graduates to thrive like cape leadwort. They shall
                  flourish beautifully no matter where they are.
                </div>
                <br />
                <div style={{ fontStyle: 'italic' }} className="">
                  “As Cape Leadwort thrives across countries, our diplomats
                  flourish beyond boundaries.”
                </div>
              </div>
              <div className="col-lg" style={{ marginBottom: 40 }}>
                <img
                  src={require('../../images/plumbago.jpg')}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  className="rounded-img default-image-shadow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HistoryContainer
