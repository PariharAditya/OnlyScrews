import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/login', '/sign-in', '/sign-up', '/profile'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/login', '/sign-in', '/sign-up', '/profile'],
        crawlDelay: 0,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/login', '/sign-in', '/sign-up', '/profile'],
        crawlDelay: 1,
      },
    ],
    sitemap: 'https://screwbazar.com/sitemap.xml',
    host: 'https://screwbazar.com',
  }
}
