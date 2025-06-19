/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  // Remove the experimental.appDir line as it's no longer needed in newer Next.js versions
}

module.exports = nextConfig