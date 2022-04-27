const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer({
    images: {
      domains: ['images.ctfassets.net'],
    },
    async redirects() {
      return [
        {
          source: '/careers',
          destination: '/working-at-nava',
          permanent: true,
        },
      ]
    },
  })

