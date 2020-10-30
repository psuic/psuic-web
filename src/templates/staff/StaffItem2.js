import React from 'react'
import Truncate from 'react-truncate'
import Link from 'gatsby-link'

const StaffItem2 = data => {
  console.log(data);
  
  return (
    <div className="" style={{ padding: 10, paddingTop: 0, paddingBottom: 20 }}>
    <Link to={"/about/staff/"+data.all.node.slug}>
    
      <div
        className="staff-container container p-0"
        style={{ width: 274, height: 386 }}
        href="/"
      >
        <img
          src={data.image_profile.source_url}
          alt="Avatar"
          className="staff-image  default-image-shadow"
        />
        <div className="staff-static-overlay ">
          <div className="staff-content-box">
            <div style={{ flex: 1 }} />
            <div className="staff-static-text">
              <div style={{ paddingLeft: 10, paddingRight: 10 }}>
                <div style={{ fontSize: '24px', fontWeight: '700',overflow:"hidden",textOverflow: "ellipsis" }}>
                {/* <Truncate lines={1} ellipsis={<span>...</span>}> */}
                {data.title}
                {/* </Truncate> */}
                
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
        </div>
        </Link>
      </div>
  )
}
export default StaffItem2
