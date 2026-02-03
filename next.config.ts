/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // COMENTE a linha abaixo enquanto estiver testando no seu computador (localhost)
  basePath: '/enfermeira-dani', 
};

export default nextConfig;