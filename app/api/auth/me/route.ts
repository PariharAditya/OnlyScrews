import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verify } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET ?? 'your-secret-key';

export async function GET(request: NextRequest) {
  try {
    const token = request.headers.get('Authorization')?.replace('Bearer ', '');

    if (!token) {
      return NextResponse.json(
        { message: 'No token provided' },
        { status: 401 }
      );
    }

    try {
      const decoded = verify(token, JWT_SECRET) as { userId: string; email: string };
      
      // Here you would typically fetch user data from your database
      // This is just an example implementation
      return NextResponse.json({
        id: decoded.userId,
        email: decoded.email,
        name: 'Test User',
      });
    } catch {
      return NextResponse.json(
        { message: 'Invalid token' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Get user error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
