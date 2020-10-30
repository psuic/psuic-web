import React, { Component } from 'react'
import _ from 'lodash'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap'

// const items = [
//   {
//     source_url: require('../images/test16-9.jpg'),
//     altText: 'Slide 1',
//     caption: 'Slide 1',
//     mime_type:'image'
//   },
//   {
//     source_url: require('../images/test16-9.jpg'),
//     altText: 'Slide 2',
//     caption: 'Slide 2',
//     mime_type:'image'
//   },
//   {
//     source_url: require('../images/test16-9.jpg'),
//     altText: 'Slide 3',
//     caption: 'Slide 3',

//     mime_type:'image'
//   },{
//     source_url: require('../images/test16-9.jpg'),
//     altText: 'Slide 4',
//     caption: 'Slide 4',
//     mime_type:'image'
//   },
// ]

class Slide extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)

    this.state = { activeIndex: 0 }
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.goToIndex = this.goToIndex.bind(this)
    this.onExiting = this.onExiting.bind(this)
    this.onExited = this.onExited.bind(this)
  }

  onExiting() {
    this.animating = true
  }

  onExited() {
    this.animating = false
  }
  next() {
    if (this.animating) return
    const nextIndex =
      this.state.activeIndex === this.props.items.length - 1
        ? 0
        : this.state.activeIndex + 1
    this.setState({ activeIndex: nextIndex })
  }

  previous() {
    if (this.animating) return
    const nextIndex =
      this.state.activeIndex === 0
        ? this.props.items.length - 1
        : this.state.activeIndex - 1
    this.setState({ activeIndex: nextIndex })
  }

  goToIndex(newIndex) {
    if (this.animating) return
    this.setState({ activeIndex: newIndex })
  }

  componentDidMount() {
    const slides = this.props.items.map((item, indx) => {
      if (_.includes(item.mime_type, 'image'))
        return (
          <CarouselItem
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={item.source_url + indx}
          >
            {item.link_url ? (
              <a href={item.link_url} target="_blank" rel="noopener noreferrer">
                <div
                  style={{ width: '100vw', height: '80vh' }}
                >
                  <img
                   style={{width:"100%",height:"100%",objectFit:"cover" }} 
                    src={item.source_url}
                    alt={'slide'}
                    className="slideContainer"
                  />
                </div>
              </a>
            ) : (
              <div
                style={{ width: '100vw', height: '80vh' }}
              >
                <img
                 style={{width:"100%",height:"100%",objectFit:"cover" }} 
                  src={item.source_url}
                  alt={'slide'}
                  className="slideContainer"
                />
              </div>
            )}
          </CarouselItem>
        )
      else
        return (
          <CarouselItem
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={item.source_url + indx}
            slide={true}
            
          >
            {item.link_url ? (
              <a href={item.link_url} target="_blank" rel="noopener noreferrer">
                <div
                  style={{ width: '100%', height: '80vh' }}
                >
                  <video style={{width:"100%",height:"100%",objectFit:"cover" }}  autoPlay loop muted>
                    <source src={item.source_url} type="video/mp4" />
                  </video>
                </div>
              </a>
            ) : (
              <div
                style={{ width: '100vw', height: '80vh'}}
              >
                <video  style={{width:"100%",height:"100%",objectFit:"cover" }}  autoPlay loop muted>
                  <source src={item.source_url} type="video/mp4" />
                </video>
              </div>
            )}
          </CarouselItem>
        )
    })
    this.setState({ slides })
  }

  render() {
    const { activeIndex } = this.state

    if (!this.state.slides) {
      return null
    }
    return (
      <Carousel
        interval={3000}
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        {/* <CarouselIndicators
          items={this.props.items}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        /> */}
        {this.state.slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
    )
  }
}

export default Slide
