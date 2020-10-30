import React, { Component } from 'react'
import Slide from '../../components/Slide'
import SectionContainer from '../../components/SectionContainer'
import _ from 'lodash'
import Link from 'gatsby-link'
import SectionItem from '../../components/SectionItem'
import StaticLogo from '../../components/StaticLogo'
import getBrowser from '../../services/utils'
import IEHeader from './IEHeader'
import HomeNewsSection from './HomeNewsSection'

class HomeContainer extends Component {
  state = {}

  componentDidMount() {
    if (typeof window !== `undefined`) {
      const width = window.innerWidth > 1024 ? 1024 : window.innerWidth
      const height = (9 / 16) * width
      this.setState({ width, height })
    }
  }

  convertGalleryItems = () => {
    var source = this.props.gallery.acf
    var mediaSlides = []
    _.range(5).forEach(number => {
      let name = 'media_slide_' + (number + 1)
      let link = 'media_link_' + (number + 1)
      if (source[name]) {
        mediaSlides.push({ ...source[name], link_url: source[link] })
      }
    })

    return mediaSlides
  }
  // converProgramItems = () => {
  //   var source = this.props.program.acf
  //   var SectionItems =[]
  //   _.range(3).array.forEach(number => {
  //     let name = 'image' + (number + 1)
  //     if (source[name]) {
  //       mediaSlides.push(source[name])
  //     }
  //   });
  // }

  render() {
    console.log(this.props.program.acf)

    const { width, height } = this.state

    if (!this.state.height) {
      return null
    }
    return (
      <div className="menubar">
        {getBrowser() !== 'IE' && <Slide items={this.convertGalleryItems()} />}
        {getBrowser() == 'IE' && <IEHeader />}
        <div className="sm">
          {/* <div          style={{
            background: '#193c6c80',
            height: '60px',
            position: 'absolute',
            zIndex: 2,
            width: '100%',
            paddingLeft: '5vw',
            paddingRight: '5vw',
            top:0
          }}>

          </div> */}
          <StaticLogo />
        </div>
        <div className="default-bg text-md" style={{ color: '#193c6c' }}>
          <SectionContainer title="News">
            <div className="container">
              <HomeNewsSection newsSection={this.props.newsSection} />
            </div>
          </SectionContainer>
          <SectionContainer
            title="International College"
            subtitle="Unleash your creativity "
            bgColor
          >
            <div className="container">
              <div className="row">
                <SectionItem
                  image={this.props.program.acf.image1.source_url}
                  title={this.props.program.acf.header1}
                  coverText="curriculumCovertext.png"
                  linkTo={'/general-education/'}
                />
                <SectionItem
                  image={this.props.program.acf.image2.source_url}
                  title={this.props.program.acf.header2}
                  coverText="coopCoverText.png"
                  linkTo={'/international-affairs/mou-collaborations'}
                />
                <SectionItem
                  image={this.props.program.acf.image3.source_url}
                  title={this.props.program.acf.header3}
                  coverText="showcaseCoverText.png"
                  linkTo={'/academic-service/'}
                />
              </div>
            </div>
          </SectionContainer>
          <SectionContainer
            title="Admission"
            subtitle="Portfilio,English language test result, Thai Matayom 6 to International students with Grade 12 or equivalent degree"
          >
            <div className="container">
              <div className="row">
                <SectionItem
                  image={this.props.admission.acf.image1.source_url}
                  // title={this.props.admission.acf.header1}
                  title="Applications who hold Thai Secondary School Certificate"
                  coverText="thaiCoverText.png"
                  linkTo={'/admission/category/thai-education-system'}
                />
                <SectionItem
                  image={this.props.admission.acf.image2.source_url}
                  // title={this.props.admission.acf.header2}
                  title="Applications who hold International Certificate"
                  coverText="interCoverText.png"
                  linkTo={'/admission/category/international-certificate'}
                />
              </div>
            </div>
          </SectionContainer>
        </div>
      </div>
    )
  }
}

export default HomeContainer
