import { MetadataRoute } from 'next'

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
    // Main product collection pages
    const mainProductPages: MetadataRoute.Sitemap = [
      { url: `${baseUrl}/products/screws`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.95 },
      { url: `${baseUrl}/products/bolts`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.95 },
      { url: `${baseUrl}/products/nuts`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.95 },
      { url: `${baseUrl}/products/washers`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.95 },
      { url: `${baseUrl}/products/anchors`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.95 },
      { url: `${baseUrl}/products/spacers`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.95 },
      { url: `${baseUrl}/products/stand-offs`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.95 },
      { url: `${baseUrl}/products/rivets-and-dowels`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.95 },
    ]

    // Get category pages dynamically from productData
    const { productData } = await import('@/lib/productData')
    const categoryPages: MetadataRoute.Sitemap = Object.keys(productData).map((slug) => ({
      url: `${baseUrl}/category/${slug}`,
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

    return [...staticPages, ...mainProductPages, ...categoryPages, ...blogPages]
  } catch (error) {
    console.error('Error generating sitemap:', error)

    // Return static pages only if database fails
    return staticPages
  }
}
