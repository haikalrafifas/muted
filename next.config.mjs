/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/:slug(api)/:path*',
        destination: 'https://muted-api.vercel.app/:slug/:path*',
      },
    ];
  },
}

module.exports = nextConfig

