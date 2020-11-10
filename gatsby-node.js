const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)
const queryAll = require(`./src/queries/queryAll.js`)
const createPaginatedPages = require('gatsby-paginate')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    // Templates
    // const pageTemplate = path.resolve('./src/templates/page.js')
    // const postTemplate = path.resolve('./src/templates/post.js')

    // const admissionTemplate = path.resolve('./src/templates/admission.js')
    const admissionDetailTemplate = path.resolve(
      './src/templates/admission-detail.js'
    )
    // const studentShowcaseTemplate = path.resolve(
    //   './src/templates/student-showcase.js'
    // )

    const generalTemplate = path.resolve('./src/templates/general.js')
    const curriculumDetailTemplate = path.resolve(
      './src/templates/curriculum-detail.js'
    )
    const majorStudentShowcaseDetailTemplate = path.resolve(
      './src/templates/major-student-showcase-detail.js'
    )
    const majorCooperativeDetailTempate = path.resolve(
      './src/templates/major-cooperative-detail.js'
    )

    const newsDetailTemplate = path.resolve('./src/templates/news-detail.js')

    const staffDetailTemplate = path.resolve('./src/templates/staff-detail.js')

    resolve(
      graphql(queryAll).then(result => {
        if (result.errors) reject(result.errors)

        // Pages detail
        // const pages = result.data.allWordpressPage.edges

        // pages.forEach(edge => {
        //   createPage({
        //     path: `/${edge.node.slug}/`,
        //     component: slash(pageTemplate),
        //     context: {
        //       id: edge.node.id,
        //     },
        //   })
        // })

        // Posts detail
        // const posts = result.data.allWordpressPost.edges

        // posts.forEach(edge => {
        //   createPage({
        //     path: `/post/${edge.node.slug}/`,
        //     component: slash(postTemplate),
        //     context: {
        //       id: edge.node.id,
        //     },
        //   })
        // })

        //Admisstion category
        const admissions = result.data.allWordpressWpAdmission.edges
        const admissionByThaiEducationCat = _.filter(admissions, edge =>
          _.some(edge.node.categories, { slug: 'thai-education-system' })
        )
        const admissionByInterCat = _.filter(admissions, edge =>
          _.some(edge.node.categories, { slug: 'international-certificate' })
        )

        createPaginatedPages({
          edges: _.orderBy(
            admissionByThaiEducationCat,
            ['edge.node.modified'],
            ['desc']
          ),
          createPage: createPage,
          pageTemplate: 'src/templates/admission.js',
          pageLength: 6,
          pathPrefix: 'admission/category/thai-education-system',
          context: {
            category: 'thai-education-system',
          },
          buildPath: (index, pathPrefix) =>
            index > 1 ? `${pathPrefix}/${index}` : `/${pathPrefix}`,
        })

        createPaginatedPages({
          edges: _.orderBy(
            admissionByInterCat,
            ['edge.node.modified'],
            ['desc']
          ),
          createPage: createPage,
          pageTemplate: 'src/templates/admission.js',
          pageLength: 9,
          pathPrefix: 'admission/category/international-certificate',
          context: {
            category: 'international-certificate',
          },
          buildPath: (index, pathPrefix) =>
            index > 1 ? `${pathPrefix}/${index}` : `/${pathPrefix}`,
        })

        admissions.forEach(edge => {
          //Admision detail
          createPage({
            path: `/admission/${edge.node.slug}`,
            component: slash(admissionDetailTemplate),
            context: {
              slug: edge.node.slug,
            },
          })
        })

        //students show case

        // Pages detail
        // const studentsShowcase =
        //   result.data.allWordpressWpStudentsShowcase.edges
        // studentsShowcase.forEach(edge => {
        //   createPage({
        //     path: `/program/students_showcase/${edge.node.slug}/`,
        //     component: slash(studentShowcaseTemplate),
        //     context: {
        //       slug: edge.node.slug,
        //     },
        //   })
        // })

        // Page general
        const generals = result.data.allWordpressWpGeneral.edges
        generals.forEach(edge => {
          createPage({
            path: `/general/${edge.node.slug}`,
            component: slash(generalTemplate),
            context: {
              slug: edge.node.slug,
            },
          })
        })

        // News category
        const news = result.data.allWordpressWpNews.edges
        const newsSlugCategories = [
          'career-opportunities',
          'general-news',
          'procurement-news',
          'upcoming-events',
        ]

        // all
        createPaginatedPages({
          edges: _.orderBy(news, ['edge.node.modified'], ['desc']),
          createPage: createPage,
          pageTemplate: 'src/templates/news.js',
          pageLength: 9,
          pathPrefix: `news`,
          context: {
            category: 'all',
          },
          buildPath: (index, pathPrefix) =>
            index > 1 ? `${pathPrefix}/${index}` : `/${pathPrefix}`,
        })

        //each news category
        _.each(newsSlugCategories, newsSlugCategory => {
          const newsByNewsSlugCategory = _.filter(news, edge =>
            _.some(edge.node.categories, { slug: newsSlugCategory })
          )
          createPaginatedPages({
            edges: _.orderBy(
              newsByNewsSlugCategory,
              ['edge.node.modified'],
              ['desc']
            ),
            createPage: createPage,
            pageTemplate: 'src/templates/news.js',
            pageLength: 9,
            pathPrefix: `news/category/${newsSlugCategory}`,
            context: {
              category: newsSlugCategory,
            },
            buildPath: (index, pathPrefix) =>
              index > 1 ? `${pathPrefix}/${index}` : `/${pathPrefix}`,
          })
        })

        news.forEach(edge => {
          //News detail
          createPage({
            path: `/news/${edge.node.slug}`,
            component: slash(newsDetailTemplate),
            context: {
              slug: edge.node.slug,
            },
          })
        })
        // End News category

        //Staff
        const staffs = _.get(result, 'data.allWordpressWpStaff.edges')
        _.each(staffs, edge => {
          createPage({
            path: `/about/staff/${edge.node.slug}`,
            component: slash(staffDetailTemplate),
            context: {
              slug: edge.node.slug,
            },
          })
        })

        //programs
        const categories = _.get(result, 'data.allWordpressCategory.edges')

        const majorCategories = _.filter(
          categories,
          category => _.get(category, 'node.parent_element.slug') === 'major'
        )

        //curriculum
        const curriculumCategories = _.filter(
          categories,
          category =>
            _.get(category, 'node.parent_element.slug') === 'major-curriculum'
        )

        const majorCooperativeCategories = _.filter(
          categories,
          category =>
            _.get(category, 'node.parent_element.slug') === 'major-cooperative'
        )

        const majorStudentShowcases = _.get(
          result,
          'data.majorStudentShowcases.edges'
        )

        _.each(majorCategories, edge => {
          const major_slug = _.get(edge, 'node.slug')

          //START MAJOR

          //major currinulum
          _.each(curriculumCategories, curriculumEdge => {
            const curriculum_slug = _.get(curriculumEdge, 'node.slug')

            createPage({
              path: `/programs/${major_slug}/curriculum/${curriculum_slug}`,
              component: slash(curriculumDetailTemplate),
              context: {
                slug: curriculum_slug,
              },
            })
          })

          //major cooperative
          _.each(majorCooperativeCategories, majorCooperativeCategory => {
            const major_cooperative_slug = _.get(
              majorCooperativeCategory,
              'node.slug'
            )

            createPage({
              path: `/programs/${major_slug}/cooperative/${major_cooperative_slug}`,
              component: slash(majorCooperativeDetailTempate),
              context: {
                slug: major_cooperative_slug,
              },
            })
          })

          //major student showcase
          const majorStudentShowcasePosts = _.chain(majorStudentShowcases)
            .map('node')
            .filter(majorStudentShowcase =>
              _.chain(majorStudentShowcase)
                .get('categories')
                .map('slug')
                .includes(major_slug)
                .value()
            )
            .map(studentShowcasePost =>
              _.pick(studentShowcasePost, ['title', 'slug'])
            )
            .value()

          _.each(majorStudentShowcases, majorStudentShowcase => {
            const major_student_showcase_slug = _.get(
              majorStudentShowcase,
              'node.slug'
            )
            const major_student_showcase_category_slug = _.get(
              majorStudentShowcase,
              'node.categories[0].slug'
            )

            createPage({
              path: `/programs/${major_slug}/student-showcase/${major_student_showcase_slug}`,
              component: slash(majorStudentShowcaseDetailTemplate),
              context: {
                slug: major_student_showcase_slug,
                major: major_student_showcase_category_slug,
                posts: majorStudentShowcasePosts,
              },
            })
          })
        }) //END MAJOR

        //annual report with paginate
        const annualReports = _.get(result, 'data.allWordpressWpAnnualReport.edges')

        createPaginatedPages({
          edges: _.orderBy(annualReports, ['edge.node.modified'], ['desc']),
          createPage: createPage,
          pageTemplate: 'src/templates/annual-report.js',
          pageLength: 9,
          pathPrefix: `about/annual-report`,
          buildPath: (index, pathPrefix) =>
            index > 1 ? `${pathPrefix}/${index}` : `/${pathPrefix}`,
        })

        //END
      })
    )
  })
}
