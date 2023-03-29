/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/((?!maintenance).*)',
        destination: '/maintenance',
        permanent: false,
      },
      // {
      //   source: "/maintenance",
      //   destination: "/",
      //   permanent: false,
      // },
    ];
  },
};

module.exports = nextConfig;
