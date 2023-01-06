/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH : "",
  images: {
    domains: ['asset.cloudinary.com', 'res.cloudinary.com']
  },
}

module.exports = nextConfig

