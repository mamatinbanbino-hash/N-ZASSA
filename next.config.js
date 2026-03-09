/** @type {import('next').Config} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'ghzyltvbjukqgpqoqake.supabase.co' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
    ],
  },
  // Optimisation pour les vidéos lourdes
  experimental: {
    serverActions: {
      bodySizeLimit: '50mb',
    },
  },
};

module.exports = nextConfig;
