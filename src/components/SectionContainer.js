import React from 'react'

const SectionContainer = props => {
  return (
    <div
      style={
        props.bgColor
          ? {
              backgroundColor: '#193c6c',
              paddingBottom: '80px',
              paddingTop: '80px',
            }
          : { paddingBottom: '80px', paddingTop: '80px' }
      }
    >
      <div>
        {props.firstLine ? (
          <div>
            <h6 className="text-center" style={{ color: 'white' }}>
              {props.firstLine}
            </h6>
          </div>
        ) : null}
        {props.title ? (
          <div
            style={props.bgColor ? { color: 'white' } : null}
            className="text-center text-xl text-hight-sm"
          >
            {props.title}
            <div
              style={
                props.bgColor
                  ? {
                      width: '150px',
                      height: '4px',
                      backgroundColor: 'white',
                      margin:"auto",
                      marginTop:"10px",
                      marginBottom:"10px"
                    }
                  : {
                      width: '150px',
                      height: '4px',
                      background: '#193c6c',
                      margin:"auto",
                      marginTop:"10px",
                      marginBottom:"10px"

                    }
              }
            />
          </div>
        ) : null}


        {props.subtitle ? (
         

          <div style={props.bgColor ? { color: 'white' } : null}>
            <div className="text-center t2"  style={{ paddingBottom: 20 ,paddingLeft:"5vw",paddingRight:"5vw"}}>
              {props.subtitle}
            </div>
          </div>
        ) : null}
        <div>{props.children}</div>
      </div>
    </div>
  )
}

export default SectionContainer
