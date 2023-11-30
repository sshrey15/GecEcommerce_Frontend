/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{appDir: true}
}


// module.exports = nextConfig

module.exports = {
  images: {
    domains: ['localhost:3001', 'ecomproject1.onrender.com'],
  },
}
