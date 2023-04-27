const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = {
  reactStrictMode: true,
  swcMinify: true,

  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    sw: "/sw.js",
    disable: process.env.NODE_ENV === "development",
    runtimeCaching,
  },
};
