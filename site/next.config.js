/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Kasm z0man',
    description: 'The unofficial store for Kasm workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://git-z0man.github.io/kasm-registry/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
