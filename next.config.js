/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins')
const withSvgr = require('next-svgr')
const withPWA = require("next-pwa");

const nextConfig = withPlugins([
  {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ["storage.googleapis.com"],
    },
  },
  [
    withPWA,
    {
      pwa: {
        disable: process.env.NODE_ENV != "production",
        dest: "public",
        register: true,
        sw: "/sw.js",
      },
    },
  ],
  withSvgr
]);

module.exports = nextConfig;
