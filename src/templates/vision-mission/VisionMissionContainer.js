import React, { Component } from 'react'
import VisionMissionHeader from './VisionMissionHeader'

class HistoryContainer extends Component {
  state = {}
  render() {
    return (
      <div>
        <VisionMissionHeader />
        <body className="default-bg text-md" style={{ color: '#193c6c' }}>
          <div className="container" style={{ paddingTop: '80px' }}>
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
              <div className="col-lg" style={{ marginBottom: 80 }}>
                <div className="text-center">
                  {/* <h5 className="text-hight-sm">PSUIC</h5> */}
                  <div className="text-xl text-hight-sm">VISION & MISSION</div>
                  {/* <h5> PSUIC</h5> */}
                </div>
                <br />
                <div className=" container" style={{ textAlign: 'justify' }}>
                  <div>
                    <p><strong>Vision</strong>: Recognizable International College in Thailand</p>
                    <p><strong>Missions</strong>:</p>
                    
                    <ol>
                      <li>Provide international programs up to trends and future market needs</li>
                      <li>Produce creative research outputs and innovations</li>
                      <li>Offer academic services in the area of English language skills design and creative</li>
                    </ol>

                    <div>
                      <div><strong>Culture:&nbsp;</strong>Our soul is for the benefit of mankind</div>
                      <div>&nbsp;</div>
                      <div><strong>Core value:&nbsp;</strong>PSUIC</div>
                      <ul>
                        <li>P - Professionalism</li>
                        <li>S - Social responsibility</li>
                        <li>U - Unity</li>
                        <li>I - Internationalization <strong>(Identity) </strong></li>
                        <li>C - Creativity <strong>(Uniqueness)</strong></li>
                      </ul>
                    
                      
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </body>
      </div>
    )
  }
}

export default HistoryContainer
