/** @type {import('next').NextConfig} */
const config = {
  experimental: {
    appDir: true,
  },
  images: {
  domains: [
  'https://picsum.photos/',
  'https://images.unsplash.com/photos/',
  ],
}
}

export default config
