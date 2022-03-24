module.exports = {
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
  }
  