module.exports = {
  siteMetadata: {
      title: 'Wordpress Gatsby',
      subtitle: `Fetch Data From Local WP Install`,
  },
  plugins: [
      'gatsby-plugin-react-helmet',
      `gatsby-plugin-styled-components`,
      {
          resolve: "gatsby-source-wordpress",
          options: {
            //   baseUrl: "192.168.0.105/wordpress",
            // baseUrl: '35.198.223.31/psuic-backend',
              baseUrl: 'www.uic.psu.ac.th/psuic-backend',
              protocol: "https",
              hostingWPCOM: false,
              useACF: true,
              verboseOutput: true,
              auth: {
                htaccess_user: '',
                htaccess_pass: '',
                htaccess_sendImmediately: false,
                wpcom_app_clientSecret: '',
                wpcom_app_clientId: '',
                wpcom_user: '',
                wpcom_pass: '',
              }
      
          }
      }
  ],
};