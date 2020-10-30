import React from 'react'
import StaticLogo from '../../components/StaticLogo';

const IEHeader = props => {
  return (
    <div className="staff-header">
      
      <img
        src={require('../../images/IEHomeBanner.jpg')}
        className="staff-header-image"
      />
    
      <div>
        <div className="section-item-text-centered">
          <div className="text-header-title" >
            PSUIC
          </div>
          <div className="text-header-sub"  style={{fontWeight:"bold"}}>
            Prince of Songkla University International College
          </div>
        </div>
      </div>
    </div>
  )
}

export default IEHeader
