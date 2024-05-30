/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd3ae3kedxtitrj.cloudfront.net',
        port: '',
        pathname: '/food/**',
      }
    ],
  },
};

export default nextConfig;
