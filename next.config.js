  /** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['localhost', 'cdn.builder.io'],
    unoptimized: true
  },
  experimental: {
    windowsPolyfill: true,
    forceSwcTransforms: true
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  trailingSlash: true,
  generateBuildId: async () => {
    return 'build'
  }
}

module.exports = nextConfig