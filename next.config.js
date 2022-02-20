module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/api/auth',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/bio',
        destination: '/about',
        permanent: true,
      },
    ]
  },
  images: {
    domains: [
      'i.scdn.co', // Spotify Album Art
      'github.com', // GitHub Avatar
      'lh3.googleusercontent.com', // NFT Assets
      'storage.opensea.io'
    ]
  },
  eslint: {
    dirs: ['pages', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
}