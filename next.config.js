/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // Enable PWA
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  }
};

module.exports = nextConfig;