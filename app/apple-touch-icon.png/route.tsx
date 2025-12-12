import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  // Redirect to the static PNG used as apple touch icon
  return Response.redirect('https://screwbazar.com/images/final%20sb%20favicon.png', 307)
}
