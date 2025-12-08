import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'

export async function GET() {
  try {
    return new ImageResponse(
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 180 180" style={{ position: 'absolute' }}>
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

          <circle cx="90" cy="90" r="88" fill="url(#bgGradient)" />
          <circle cx="90" cy="90" r="88" fill="none" stroke="url(#borderGradient)" strokeWidth="2" />
          <circle cx="90" cy="90" r="83" fill="none" stroke="#bcff1d" strokeWidth="1" opacity="0.3" />
        </svg>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 80,
            fontWeight: '900',
            fontFamily: "'Montserrat', 'Arial Black', sans-serif",
            letterSpacing: '-4px',
            color: '#bcff1d',
            textShadow: '0 2px 8px rgba(188, 255, 29, 0.5), 0 0 20px rgba(188, 255, 29, 0.2)',
            position: 'relative',
            zIndex: 10,
          }}
        >
          SB
        </div>
      </div>,
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
