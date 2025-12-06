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
            background: "linear-gradient(135deg, #000000 0%, #1a1a1a 100%)",
            fontSize: 80,
            fontWeight: "900",
            fontFamily: "'Arial Black', sans-serif",
            letterSpacing: "-8px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#bcff1d",
              textShadow: "0 2px 8px rgba(188, 255, 29, 0.3)",
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
