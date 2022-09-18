/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:["bit.ly"]
  },
  distDir:'production'
}

module.exports = nextConfig

