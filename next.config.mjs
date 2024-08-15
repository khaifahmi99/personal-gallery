/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d3ae3kedxtitrj.cloudfront.net",
        port: "",
        pathname: "/food/**",
      },
      {
        protocol: "https",
        hostname: "d3ae3kedxtitrj.cloudfront.net",
        port: "",
        pathname: "/travel/**",
      },
      {
        protocol: "https",
        hostname: "d3ae3kedxtitrj.cloudfront.net",
        port: "",
        pathname: "/gundam/**",
      },
    ],
  },
};

export default nextConfig;
