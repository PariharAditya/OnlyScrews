import { MetadataRoute } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://screwbazar.com'
  
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/bulk-enquiry`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  try {
    // Get all products
    const products = await prisma.product.findMany({
      select: {
        id: true,
        slug: true,
        updatedAt: true,
      },
    })

    const productPages: MetadataRoute.Sitemap = products.map((product) => ({
      url: `${baseUrl}/products/${product.slug}`,
      lastModified: product.updatedAt || new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    }))

    // Define category pages
    const categories = [
      'self-tapping-screws',
      'machine-screws',
      'wood-screws',
      'drywall-screws',
      'hex-bolts',
      'carriage-bolts',
      'u-bolts',
      'eye-bolts',
      'hex-nuts',
      'lock-nuts',
      'wing-nuts',
      'cap-nuts',
      'flat-washers',
      'spring-washers',
      'lock-washers',
      'fender-washers',
      'expansion-anchors',
      'drop-in-anchors',
      'wedge-anchors',
      'sleeve-anchors',
      'nylon-screws',
      'nylon-nuts',
      'nylon-washers',
      'nylon-standoffs',
      'pcb-standoffs',
      'pcb-screws',
      'pcb-spacers',
      'terminal-blocks',
    ]

    const categoryPages: MetadataRoute.Sitemap = categories.map((category) => ({
      url: `${baseUrl}/category/${category}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    }))

    // Get blog posts
    const blogPosts = [
      { id: '1', slug: 'choosing-right-screws' },
      { id: '2', slug: 'fastener-materials-guide' },
      { id: '3', slug: 'industrial-applications' },
    ]

    const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.id}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))

    await prisma.$disconnect()

    return [...staticPages, ...productPages, ...categoryPages, ...blogPages]
  } catch (error) {
    console.error('Error generating sitemap:', error)
    await prisma.$disconnect()
    
    // Return static pages only if database fails
    return staticPages
  }
}
