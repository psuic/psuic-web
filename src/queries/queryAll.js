'use strict'

module.exports = `
    {
        allWordpressPage {
            edges {
                node {
                    id
                    slug
                    status
                    template
                }
            }
        }
        
        allWordpressPost {
            edges {
                node {
                    id  
                    slug
                    status
                    template
                    format
                }
            }
        }

        allWordpressWpAdmission {
            edges {
              node {
                id
                slug
                title
                modified
                categories {
                  slug
                }
                featured_media {
                  source_url
                }
                acf {
                  short_description
                }
              }
            }
        }

        allWordpressWpGeneral{
          edges{
            node{
              slug
              title
              acf {
                banner_image{
                  source_url
                }
                content
              }
            }
          }
        }
        
        allWordpressWpNews {
          edges {
            node {
              id
              slug
              title
              modified
              categories {
                slug
              }
              acf {
                thumbnail_image {
                  source_url
                }
                short_description
                content
              }
            }
          }
        }

        allWordpressWpStaff{
          edges {
            node {
              id
              slug
              title
              modified
              categories {
                slug
              }
              acf {
                image_profile{
                  source_url
                }
                position
                detail
                more_detail
                phone
                email
                website
              }
            }
          }
        }

        allWordpressCategory {
          edges {
            node {
              name
              slug
              parent_element {
                slug
              }
            }
          }
        }

        majorStudentShowcases: allWordpressWpMajorStdShowcase{
          edges {
            node {
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
        }

        allWordpressWpAnnualReport {
          edges {
            node {
              id
              slug
              title
              modified
              acf {
                image {
                  source_url
                }
                link
              }
            }
          }
        }
      

    }

`
