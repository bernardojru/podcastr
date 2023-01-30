const withPWA = require("next-pwa");
const runtimeCaching = require('next-pwa/cache')

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["storage.googleapis.com"],
  },
//   pwa: {
//     dest: "public",
//     register: true,
//     skipWaiting: true,
//     sw: "/sw.js",
//     disable: process.env.NODE_ENV === "development",
//     runtimeCaching,
//   },
};

// const withPWA = require('next-pwa')

// module.exports = withPWA({
//   reactStrictMode: true,
//   swcMinify: true,
//   images: {
//     domains: ['storage.googleapis.com']
//   },
//   // só funciona se manter apenas isso abaixo tirando o pwa
//   pwa: {
//    dest: 'public',
//     register: true,
//     skipWaiting: true,
//     sw: '/sw.js',
//     disable: process.env.NODE_ENV === 'development',
//   }
// })
