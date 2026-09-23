/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '**',
      },
    ],
    unoptimized: true,
  },
  transpilePackages: [
    '@ionic/react',
    '@ionic/core',
    '@stencil/core',
    'ionicons',
  ],
  webpack: (config) => {
    return config;
  },
};

module.exports = nextConfig;