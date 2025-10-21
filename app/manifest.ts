import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'OnlyScrews',
    short_name: 'OnlyScrews',
    description: 'Your trusted partner in industrial fastening solutions',
    start_url: '/',
    display: 'standalone',
    background_color: '#1a5f7a',
    theme_color: '#1a5f7a',
    icons: [
      {
        src: '/icon.jpg',
        sizes: '192x192',
        type: 'image/jpeg',
        purpose: 'maskable',
      },
      {
        src: '/icon.jpg',
        sizes: '512x512',
        type: 'image/jpeg',
        purpose: 'maskable',
      },
    ],
  }
}
