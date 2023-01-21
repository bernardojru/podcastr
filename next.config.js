const withPWA = require('next-pwa')

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['storage.googleapis.com']
  },
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    sw: "/sw.js",
    disable: process.env.NODE_ENV === "development",
  }
})
















// /** @type {import('next').NextConfig} */
// // const withPlugins = require("next-compose-plugins");
// // const withSvgr = require("next-svgr");
// const withPWA = require("next-pwa");

// const nextConfig = withPWA({
//   reactStrictMode: true,
//   swcMinify: true,
//   images: {
//     domains: ["storage.googleapis.com"],
//   },

//   pwa: {
//     dest: "public",
//     register: true,
//     skipWaiting: true,
//     sw: "/sw.js",
//     disable: process.env.NODE_ENV === "development",
//   },
// });

// module.exports = nextConfig;
