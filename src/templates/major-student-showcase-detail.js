import React from 'react'
import { withProps } from 'recompose'
import StudentShowcase from './students-showcase/StudentShowcase'
import _ from 'lodash'
import { WEB_URL } from '../constants/endpoints'
import { getTitleFromPostCategories,getTagFromURL } from '../services/utils';


const StudentShowcaseTemplate = ({ studentShowcase }) => (
  <StudentShowcase data={studentShowcase}  tag={getTagFromURL()}  />
)

export default withProps(ownProps => {
  const data = ownProps.data.wordpressWpMajorStdShowcase
  const posts = _.get(ownProps, 'pathContext.posts')

  return {
    studentShowcase: {
      ...data,
      posts,
      video_link: _.get(data, 'acf.video_link'),
      gallery_images: transformGalleryImages(_.get(data, 'acf.gallery_images')),
    },
  }
})(StudentShowcaseTemplate)

const transformGalleryImages = str => {
  if (_.isEmpty(str)) {
    return []
  } else {
    const selectedGalleryImages = str.match(/<figure[^>]+?>([^$]+?)<\/figure>/g)

    if (_.isEmpty(selectedGalleryImages)) {
      return []
    }

    const images = _(selectedGalleryImages)
      .map(selectedGalleryImage => {
        const selectedImageUrls = selectedGalleryImage.match(
          /([.\w/:/-]+150x150\.(\w+))/g
        )
        const imageUrl = _.replace(_.head(selectedImageUrls), '-150x150', '')

        // const imageUrl = "http://psuic.psu.ac.th/th/psuic-backend/wp-content/uploads/2018/08/Artboard-36-100-150x150.jpg"

        const selectedCaptions = /<figcaption[^>]+?>([^$]+?)<\/figcaption>/g.exec(
          selectedGalleryImage
        )

        let caption = _.takeRight(selectedCaptions)
        caption = _.replace(caption, /[\r\t\n]/g, '')

        return {
          imageUrl,
          caption,
        }
      })
      .value()
    return images
  }
}

export const pageQuery = graphql`
  query currentStdShowcaseQuery($slug: String, $major: String) {
    wordpressWpMajorStdShowcase(
      slug: { eq: $slug }
      categories: { slug: { eq: $major } }
    ) {
      id
      slug
      title
      content
      categories {
        slug
        name
      }
      acf {
        video_link
        gallery_images
      }
    }
  }
`
