const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer({
    i18n: {
      locales: ["en"],
      defaultLocale: "en",
    },
    images: {
      domains: ['images.ctfassets.net',"dl.airtable.com"],
    },
    async redirects() {
      return [
        // {
        //   source: '/careers',
        //   destination: '/working-at-nava',
        //   permanent: true,
        // },
      ]
    },
  })

