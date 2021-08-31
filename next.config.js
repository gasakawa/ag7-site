/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['es', 'pt'],
    defaultLocale: 'es',
  },
  images: {
    domains: ['ag7digital-site.s3.amazonaws.com'],
  },
};
