import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)",
          position: "relative",
        }}
      >
        {/* Circular border */}
        <div
          style={{
            width: "196px",
            height: "196px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #bcff1d 0%, #a8e600 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
          }}
        >
          <div
            style={{
              width: "190px",
              height: "190px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* SB Text */}
            <div
              style={{
                fontSize: "88px",
                fontWeight: 900,
                fontFamily: "serif",
                color: "#bcff1d",
                letterSpacing: "-4px",
                display: "flex",
              }}
            >
              SB
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 192,
      height: 192,
    }
  )
}
