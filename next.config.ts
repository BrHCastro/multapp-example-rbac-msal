import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/:currency/:locale/:path*',
        has: [
          {
            type: 'cookie',
            key: 'user_permission',
            value: 'Internal',
          },
        ],
        destination: '/:currency/:locale/:path*',
      },
      {
        source: '/:currency/:locale/:path*',
        has: [
          {
            type: 'cookie',
            key: 'user_permission',
            value: 'External',
          },
        ],
        destination: '/:currency/:locale/:path*',
      },
    ]
  },
}

export default nextConfig
