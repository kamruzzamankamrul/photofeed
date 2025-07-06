/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
     domains: ['plus.unsplash.com'],
    remotePatterns: [
         {
            protocol: 'https',
            hostname: 'source.unsplash.com',
          },
           {
            protocol: 'https',
            hostname: 'i.pravatar.cc',
          },
           {
            protocol: 'https',
            hostname: 'images.unsplash.com',
          },
    ],
  },
};

export default nextConfig;
