import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Lightbox from 'react-images'
import _ from 'lodash'

import StackGrid, { transitions, easings } from 'react-stack-grid'

class Gallery extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    }

    this.closeLightbox = this.closeLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
    this.gotoImage = this.gotoImage.bind(this)
    this.handleClickImage = this.handleClickImage.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
  }
  openLightbox(index, event) {
    event.preventDefault()
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    })
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    })
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    })
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    })
  }
  gotoImage(index) {
    this.setState({
      currentImage: index,
    })
  }
  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) return

    this.gotoNext()
  }
  renderGallery() {
    const { images } = this.props

    if (!images) return
    return (
      <div
        className="row"
        style={{ width: '100%', height: '30vw', backgroundColor: '' }}
      >
        {_.get(this.props, 'images[0]') ? (
          <div className="thumb-frame-first">
            <img
              src={_.get(this.props, 'images[0].src')}
              onClick={e => this.openLightbox(0, e)}
              className="thumb default-image-shadow"
            />
          </div>
        ) : null}

        <div style={{ width: '30%', height: '100%' }}>
          {_.get(this.props, 'images[1]') ? (
            <div className="thumb-frame">
              <img
                src={_.get(this.props, 'images[1].src')}
                onClick={e => this.openLightbox(1, e)}
                className="thumb default-image-shadow"
              />
            </div>
          ) : null}
          {_.get(this.props, 'images[2]') ? (
            <div className="thumb-frame">
              <img
                src={_.get(this.props, 'images[2].src')}
                onClick={e => this.openLightbox(2, e)}
                className="thumb default-image-shadow"
              />
            </div>
          ) : null}
        </div>
        <div style={{ width: '30%', height: '100%' }}>
          {_.get(this.props, 'images[3]') ? (
            <div className="thumb-frame">
              <img
                src={_.get(this.props, 'images[3].src')}
                onClick={e => this.openLightbox(3, e)}
                className="thumb default-image-shadow"
              />
            </div>
          ) : null}
          {_.get(this.props, 'images[4]') ? (
            <div className="thumb-frame">
              <img
                src={_.get(this.props, 'images[4].src')}
                onClick={e => this.openLightbox(4, e)}
                className="thumb default-image-shadow"
              />
            </div>
          ) : null}
        </div>
      </div>
    )
  }
  render() {
    const transition = transitions.scaleDown

    const { images } = this.props
    console.log(images)
    return (
      <div>
        {/* <div className="container center">{this.renderGallery()}</div> */}
        <StackGrid
          monitorImagesLoaded
          columnWidth="50%"
          duration={600}
          gutterWidth={10}
          gutterHeight={10}
          easing={easings.cubicOut}
          appearDelay={60}
          appear={transition.appeared}
          appeared={transition.appeared}
          enter={transition.enter}
          entered={transition.entered}
          leaved={transition.leaved}
        >
          {_.map(images, (obj, idx) => {
            return (
              <div key={idx}>
                <img
                  src={obj.src}
                  alt={obj.caption}
                  onClick={e => this.openLightbox(idx, e)}
                />
              </div>
            )
          })}
        </StackGrid>
        <Lightbox
          currentImage={this.state.currentImage}
          images={this.props.images}
          isOpen={this.state.lightboxIsOpen}
          onClickImage={this.handleClickImage}
          onClickNext={this.gotoNext}
          onClickPrev={this.gotoPrevious}
          onClickThumbnail={this.gotoImage}
          onClose={this.closeLightbox}
          preventScroll={this.props.preventScroll}
          showThumbnails={this.props.showThumbnails}
          spinner={this.props.spinner}
          spinnerColor={this.props.spinnerColor}
          spinnerSize={this.props.spinnerSize}
          theme={this.props.theme}
        />
      </div>
    )
  }
}

Gallery.displayName = 'Gallery'
Gallery.propTypes = {
  heading: PropTypes.string,
  images: PropTypes.array,
  showThumbnails: PropTypes.bool,
  subheading: PropTypes.string,
}

export default Gallery
