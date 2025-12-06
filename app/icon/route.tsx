import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export async function GET() {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#ffffff",
          }}
        >
          {/* Circular Background with Gradient */}
          <svg
            width="192"
            height="192"
            viewBox="0 0 192 192"
            style={{
              position: "absolute",
            }}
          >
            {/* Outer Circle - Dark Background */}
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
            
            {/* Main Circle */}
            <circle cx="96" cy="96" r="92" fill="url(#bgGradient)" />
            
            {/* Accent Border */}
            <circle cx="96" cy="96" r="92" fill="none" stroke="url(#borderGradient)" strokeWidth="2" />
            
            {/* Inner accent circle */}
            <circle cx="96" cy="96" r="85" fill="none" stroke="#bcff1d" strokeWidth="0.8" opacity="0.4" />
          </svg>

          {/* SB Text */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 72,
              fontWeight: "900",
              fontFamily: "'Montserrat', 'Arial Black', sans-serif",
              letterSpacing: "-2px",
              color: "#bcff1d",
              textShadow: "0 4px 16px rgba(188, 255, 29, 0.4)",
              position: "relative",
              zIndex: 10,
            }}
          >
            SB
          </div>
        </div>
      ),
      {
        width: 192,
        height: 192,
      }
    );
  } catch (error) {
    console.error("Icon generation error:", error);
    return new Response(null, { status: 500 });
  }
}
