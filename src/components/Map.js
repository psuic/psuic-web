import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ isHover, onMouseMove, onMouseLeave }) => (
  <div
    style={{ position: 'absolute', top: '-8vh', left: '-4vh' }}
    onMouseLeave={onMouseLeave}
    onMouseMove={onMouseMove}
  >
    <HoverComponent isHover={isHover} />
    <img
      src={require('../images/pin.svg')}
      style={{ width: '8vh', height: 'auto' }}
    />
  </div>
)

const HoverComponent = ({ isHover }) =>
  isHover && (
    <div
      style={{
        position: 'absolute',
        top: -16,
        left: 16,
        width: 160,
        textAlign: 'center',
        borderRadius: 50,
        fontSize: 24,
        backgroundColor: 'white',
      }}
    >
      <a href="https://goo.gl/maps/k6vVHDsu5qu" target="_blank" style={{ }}>
        Directions
      </a>
    </div>
  )

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 7.005908,
      lng: 100.499008,
    },
    zoom: 15,
  }

  state = {
    isHover: false,
  }

  handleMouseMove = () => {
    this.setState({ isHover: true })
  }

  handleMouseLeave = () => {
    this.setState({ isHover: false })
  }

  render() {
    return (
      // Important! Always set the container height explicitly

      <div style={{ height: '100%', width: '100%' }}>
        {/* <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={{
            styles: [
              {
                featureType: 'all',
                stylers: [{ visibility: 'on' }],
              },
            ],
          }}
        >
          <AnyReactComponent
            lat={7.005908}
            lng={100.499008}
            isHover={this.state.isHover}
            onMouseMove={this.handleMouseMove}
            onMouseLeave={this.handleMouseLeave}
          />
        </GoogleMapReact> */}
      </div>
    )
  }
}

export default Map
