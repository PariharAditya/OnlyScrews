import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'

export async function GET() {
  try {
    return new ImageResponse(
      (
        <svg
          width="180"
          height="180"
          viewBox="0 0 180 180"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a1a1a" />
              <stop offset="100%" stopColor="#0d0d0d" />
            </linearGradient>
            <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#bcff1d" />
              <stop offset="100%" stopColor="#a8e600" />
            </linearGradient>
          </defs>
          
          {/* Main Circle - Dark Background */}
          <circle cx="90" cy="90" r="88" fill="url(#bgGradient)" />
          
          {/* Accent Border */}
          <circle cx="90" cy="90" r="88" fill="none" stroke="url(#borderGradient)" strokeWidth="2" />
          
          {/* Inner accent circle */}
          <circle cx="90" cy="90" r="83" fill="none" stroke="#bcff1d" strokeWidth="1" opacity="0.3" />
          
          {/* SB Text */}
          <text
            x="90"
            y="108"
            fontSize="80"
            fontWeight="900"
            fontFamily="serif"
            fill="#bcff1d"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            SB
          </text>
        </svg>
      ),
      {
        width: 180,
        height: 180,
      }
    )
  } catch (error) {
    console.error('Apple touch icon generation error:', error)
    return new Response(null, { status: 500 })
  }
}
