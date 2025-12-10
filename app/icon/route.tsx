import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export async function GET() {
  try {
    return new ImageResponse(
      (
        <svg
          width="192"
          height="192"
          viewBox="0 0 192 192"
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
          <circle cx="96" cy="96" r="98" fill="url(#bgGradient)" />
          
          {/* Accent Border */}
          <circle cx="96" cy="96" r="98" fill="none" stroke="url(#borderGradient)" strokeWidth="3" />
          
          {/* Inner accent circle */}
          <circle cx="96" cy="96" r="92" fill="none" stroke="#bcff1d" strokeWidth="1" opacity="0.3" />
          
          {/* SB Text */}
          <text
            x="96"
            y="120"
            fontSize="88"
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
        width: 192,
        height: 192,
      }
    );
  } catch (error) {
    console.error("Icon generation error:", error);
    return new Response(null, { status: 500 });
  }
}
