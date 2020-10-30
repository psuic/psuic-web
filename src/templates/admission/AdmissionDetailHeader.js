// import React from 'react'

// const AdmissionDetailHeader = props => {
//   return (
//     <div className="default-header">
//       <h6 className="text-center" style={{ color: 'white' }}>
//         ADMISSION
//       </h6>
//       <h1 className="text-center" style={{ color: 'white' }}>
//         {props.title}
//       </h1>
//       <h6 className="text-center" style={{ color: 'white' }}>
//       Prince of Songkla University International College
//       </h6>

//       <div className="row center" style={{fontSize:18}} >
//             {props.children}
//           </div>
//     </div>
//   )
// }

// export default AdmissionDetailHeader

import React from 'react'
import StaticLogo from '../../components/StaticLogo'
import ScrollToDetail from '../../components/ScrollToDetailButton';

const AdmissionDetailHeader = props => {
  return (
    <div className="menubar">
      <div className="lg">
        <div className="staff-header">
          <img
            src={require('../../images/banner/Admission.png')}
            className="staff-header-image"
          />
          <img
            src={require('../../images/OpacityHeader.png')}
            className="staff-header-image"
          />
          <img
            src={require('../../images/banner/graphics/AdmissionDetail-Showcase.png')}
            className="staff-header-image"
          />
          <div>
            <div
              className="section-item-text-centered"
              style={{ width: '100%' }}
            >
              <div className="text-header-title">{props.title}</div>
              <div className="text-center text-header-sub">
                Prince of Songkla University International College
              </div>
              {/* <div className="row center text-header-sub"  >
            {props.children}
          </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="sm">
        <div className="mobile-header">
          <img
            src={require('../../images/banner/Admission.png')}
            className="staff-header-image"
          />
          <img
            src={require('../../images/OpacityHeader.png')}
            className="staff-header-image"
          />
          <div>
            <div
              className="general-header-text "
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '10%',
              }}
            >
              <div className="text-header-title">{props.title}</div>
              <br />
              <div className="text-header-sub">
                Prince of Songkla University International College
              </div>
              <StaticLogo />
              <ScrollToDetail />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdmissionDetailHeader
