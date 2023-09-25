/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['ag7digital-site.s3.amazonaws.com']
  },
  compiler: {
    styledComponents: true
  },
  experimental: {
    appDir: false
  }
};
