import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/login', '/login/', '/sign-in', '/sign-in/', '/sign-up', '/sign-up/', '/profile', '/profile/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/login', '/login/', '/sign-in', '/sign-in/', '/sign-up', '/sign-up/', '/profile', '/profile/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/login', '/login/', '/sign-in', '/sign-in/', '/sign-up', '/sign-up/', '/profile', '/profile/'],
        crawlDelay: 1,
      },
    ],
    sitemap: 'https://screwbazar.com/sitemap.xml',
    host: 'https://screwbazar.com',
  }
}
