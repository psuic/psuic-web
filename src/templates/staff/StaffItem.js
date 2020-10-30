import React from 'react'
import Truncate from 'react-truncate'

const StaffItem = data => {
  return (
    <div className="" style={{ padding: 10, borderRadius: '1rem' }}>
      <div
        className="staff-container container p-0"
        style={{ width: 274, height: 386 }}
      >
        <img
          src={data.image_profile.source_url}
          alt="Avatar"
          className="staff-image  default-image-shadow"
        />
        <div className="staff-static-overlay  ">
          <div className="staff-content-box">
            <div style={{ flex: 1 }} />
            <div className="staff-static-text">
              <div style={{ paddingLeft: 10, paddingRight: 10 }}>
                <div style={{ fontSize: '24px', fontWeight: '700',overflow:"hidden",textOverflow: "ellipsis" }}>
                <Truncate lines={1} ellipsis={<span>...</span>}>
                {data.title}
                </Truncate>
                
                </div>
                <div style={{ overflow:"hidden",textOverflow: "ellipsis" }}>
                <Truncate style={{ fontSize: '20px' }} lines={1} ellipsis={<span>...</span>}>
                {data.position}
                </Truncate>
                </div>
                
                
              </div>
            </div>
          </div>
        </div>
        <div className="staff-overlay  ">
          <div className="staff-content-box">
            <div style={{ flex: 1 }} />
            <div className="staff-text ">
              <h4>{data.title}</h4>

              <div className="text-md">{data.position}</div>

              <span
                className="text-md text-hight-sm"
                style={{ padding: 5 }}
                dangerouslySetInnerHTML={{ __html: data.detail }}
              />
              <br />
              <div style={{paddingBottom:30}}>
                {data.phone ? (
                  <div  className="row text-md" style={{justifyContent:"flex-start"}}>
                  <a href={'tel:' + data.phone}>
                    <img
                      src={require('../../images/icons/old-handphone.png')}
                      style={{
                        width: 24,
                        height: 24,
                        marginBottom: 0,
                        marginRight: '5px',
                      }}
                    />
                  </a>
                  <div>{data.phone}</div>
                  </div>
                ) : null}
                {data.email ? (
                   <div  className="row text-md" style={{justifyContent:"flex-start"}}>
                  <a href={'mailto:' + data.email}>
                    <img
                      src={require('../../images/icons/black-envelope.png')}
                      style={{
                        width:24,
                        height: 24,
                        marginBottom: 0,
                        marginRight: '5px',
                      }}
                    />
                  </a>
                  <div>{data.email}</div></div>
                ) : null}
                {data.website ? (
                   <div  className="row text-md" style={{justifyContent:"flex-start"}}>
                  <a
                    href={data.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={require('../../images/icons/world.png')}
                      style={{
                        width: 24,
                        height: 24,
                        marginBottom: 0,
                        marginRight: '5px',
                      }}
                    />
                  </a>
                  <div>{data.website}</div></div>
                ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    // </div>
  )
}
export default StaffItem
