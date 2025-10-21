import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: '#1a5f7a',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '8px',
        }}
      >
        OS
      </div>
    ),
    {
      width: 32,
      height: 32,
    }
  );
}
