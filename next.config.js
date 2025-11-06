  /** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  experimental: {
    windowsPolyfill: true,
    forceSwcTransforms: true
  },
  trailingSlash: true,
  generateBuildId: async () => {
    return 'build'
  }
}

module.exports = nextConfig