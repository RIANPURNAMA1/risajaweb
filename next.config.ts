import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {

    
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
      },
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
      },
      {

        protocol: "https",
        hostname:"img.freepik.com"
      },
      {

        protocol: "https",
        hostname:"image.web.id"
      }
    ],
  },
};

module.exports = nextConfig;
