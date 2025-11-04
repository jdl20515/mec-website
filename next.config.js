/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        pathname: '/vi/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/playbook',
        destination: '/launchpad',
        permanent: true,
      },
      {
        source: '/playbook/:path*',
        destination: '/launchpad/:path*',
        permanent: true,
      },
      {
        source: '/starthouse',
        destination: '/programs/starthouse',
        permanent: true,
      },
      {
        source: '/starthouse/:path*',
        destination: '/programs/starthouse/:path*',
        permanent: true,
      },
      {
        source: '/startup-interface',
        destination: '/programs/startup-interface',
        permanent: true,
      },
      {
        source: '/startup-interface/:path*',
        destination: '/programs/startup-interface/:path*',
        permanent: true,
      },
      {
        source: '/sprint',
        destination: '/programs/spring',
        permanent: true,
      },
      {
        source: '/hs-pitch-competition',
        destination: '/programs/hs-pitch',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/community',
        permanent: true,
      },
      {
        source: '/team',
        destination: '/community/team',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
