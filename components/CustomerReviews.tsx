/**
 * Review & Rating Components for Product Pages
 * Display customer reviews and aggregate ratings
 */

import React from 'react'
import { Star } from 'lucide-react'

interface Review {
  author: string
  rating: number
  text: string
  date: string
  verified?: boolean
}

interface ReviewsComponentProps {
  productName: string
  averageRating: number
  reviewCount: number
  reviews: Review[]
}

/**
 * Customer Reviews Component
 * Shows individual reviews and overall rating
 */
export function CustomerReviews({
  productName,
  averageRating,
  reviewCount,
  reviews,
}: ReviewsComponentProps) {
  const ratingDistribution = {
    5: Math.round((reviews.filter((r) => r.rating === 5).length / reviews.length) * 100),
    4: Math.round((reviews.filter((r) => r.rating === 4).length / reviews.length) * 100),
    3: Math.round((reviews.filter((r) => r.rating === 3).length / reviews.length) * 100),
    2: Math.round((reviews.filter((r) => r.rating === 2).length / reviews.length) * 100),
    1: Math.round((reviews.filter((r) => r.rating === 1).length / reviews.length) * 100),
  }

  return (
    <div className="w-full py-8 px-4 bg-gray-50 rounded-lg">
      {/* Overall Rating Summary */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4">{productName} Reviews</h3>

        <div className="flex items-start gap-8">
          {/* Rating Overview */}
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold mb-2">{averageRating.toFixed(1)}</div>
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={i < Math.round(averageRating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                />
              ))}
            </div>
            <div className="text-sm text-gray-600">{reviewCount} reviews</div>
          </div>

          {/* Rating Distribution */}
          <div className="flex-1">
            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star} className="flex items-center gap-4 mb-3">
                <div className="flex gap-1 w-12">
                  {[...Array(star)].map((_, i) => (
                    <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-yellow-400 h-2 rounded-full"
                    style={{ width: `${ratingDistribution[star as keyof typeof ratingDistribution]}%` }}
                  ></div>
                </div>
                <div className="text-sm text-gray-600 w-8">
                  {ratingDistribution[star as keyof typeof ratingDistribution]}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Individual Reviews */}
      <div className="border-t pt-8">
        <h4 className="font-bold text-lg mb-4">Customer Reviews</h4>
        <div className="space-y-4">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="font-semibold">{review.author}</div>
                  {review.verified && <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Verified Purchase</span>}
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-2">{review.text}</p>
              <div className="text-xs text-gray-500">{review.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/**
 * Generate Review Schema for Product Pages
 * Enables star ratings in Google Search Results
 */
export function generateProductReviewSchema(product: {
  name: string
  url: string
  image: string
  averageRating: number
  reviewCount: number
  reviews: Array<{
    author: string
    rating: number
    text: string
    date: string
  }>
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    url: product.url,
    image: product.image,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.averageRating,
      bestRating: 5,
      worstRating: 1,
      ratingCount: product.reviewCount,
      reviewCount: product.reviewCount,
    },
    review: product.reviews.slice(0, 10).map((review) => ({
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
        bestRating: 5,
        worstRating: 1,
      },
      author: {
        '@type': 'Person',
        name: review.author,
      },
      reviewBody: review.text,
      datePublished: review.date,
    })),
  }
}
