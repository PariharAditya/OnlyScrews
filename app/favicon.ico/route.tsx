import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const contentType = 'image/png'

export async function GET() {
  // Redirect to the static PNG image in public/images
  return Response.redirect('/images/final%20sb%20favicon.png', 307);
}
