/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      { source: "/skills", destination: "/about", permanent: false },
      { source: "/education", destination: "/about", permanent: false },
      { source: "/awards", destination: "/about", permanent: false },
    ];
  },
};

export default nextConfig;
