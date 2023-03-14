/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // NextJS 13 app directory still does not fully support Static Site Generation.
  // See the roadmap for the current status.
  // https://beta.nextjs.org/docs/app-directory-roadmap
  //output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  }
}

module.exports = nextConfig
