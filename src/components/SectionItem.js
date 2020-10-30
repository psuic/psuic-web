import React from 'react'
import Link from 'gatsby-link'

const SectionItem = props => {
  const { image, title, coverText } = props
  return (
    <div className="col-md" style={{ paddingTop: 10,maxWidth:"90%",margin:"auto" }}>
      <Link to={props.linkTo}>
        <div
          className="section-item-container "
          style={{ height: '220px', width: '100%' }}
        >
          <img
            src={require('../images/home/opacity.png')}
            className="staff-header-image rounded-img"
            style={{opacity:"0.5"}}
          />
          <div style={{backgroundColor:"#193c6c",width:"100%",height:"100%",position:"absolute",opacity:"0.1"}} className="rounded-img" >

          </div>
          <div
            style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                width: '70%',
              }}
            >
              <div className="line-graphic" />
              <h3 style={{width:"100%",marginTop:"10px",marginBottom:"10px",lineHeight:"1.5rem"}}>{title}</h3>
              <div className="line-graphic" />
            </div>
            {/* <img
              src={require('../images/home/' + coverText)}
              style={{
                objectFit: 'contain',
                //height: '40%',
                width: '100%',
                padding: "10%",
              }}
            /> */}
          </div>
          <img
        
            src={image}
            alt={title}
            style={{ width: '100%' }}
            className="rounded-img default-image-shadow section-item-image"
          />
        </div>
      </Link>
    </div>
  )
}

export default SectionItem
