/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['puppeteer-core'],
  },
  transpilePackages: ["three"],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      }, {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      }, {
        protocol: 'https',
        hostname: 'naverbooking-phinf.pstatic.net',
        port: '',
        pathname: '/**',
      }, {
        protocol: 'http',
        hostname: 'blogfiles.naver.net',
        port: '',
        pathname: '/**',
      }, {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
        port: '',
        pathname: '/**',
      }, {
        protocol: 'https',
        hostname: 'product-image.kurly.com',
        port: '',
        pathname: '/**',
      }, {
        protocol: 'https',
        hostname: 'img-cf.kurly.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;