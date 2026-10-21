/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Use project eslint.config.js (globals for browser + node)
    dirs: ['src'],
  },
  env: {
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  },
}

export default nextConfig
