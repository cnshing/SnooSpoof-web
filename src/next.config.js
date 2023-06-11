/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  }
}

module.exports = nextConfig
