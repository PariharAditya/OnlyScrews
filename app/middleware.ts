// middleware.ts - CORRECT VERSION
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  
  // Normalize URLs with spaces or encoded spaces to proper hyphens
  // Handle /products/screws/self-tapping -screws/ or /products/screws/self-tapping%20-screws/
  if (url.pathname.includes('/self-tapping -screws') || 
      url.pathname.includes('/self-tapping%20-screws')) {
    url.pathname = url.pathname
      .replace('/self-tapping -screws', '/self-tapping-screws')
      .replace('/self-tapping%20-screws', '/self-tapping-screws')
    return NextResponse.redirect(url, 301) // Permanent redirect
  }
  
  // Simple middleware that just continues
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}