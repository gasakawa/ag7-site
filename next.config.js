/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['pt-BR'],
    defaultLocale: 'pt-BR'
  },
  images: {
    domains: ['ag7digital-site.s3.amazonaws.com']
  },
  compiler: {
    styledComponents: true
  }
};
