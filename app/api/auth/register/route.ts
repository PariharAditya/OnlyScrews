import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import bcrypt from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import type { RegisterData, User, AuthResponse } from '@/types/auth';

const JWT_SECRET = process.env.JWT_SECRET ?? 'your-secret-key';

// Mock user database - In production, replace with your database
const users = new Map<string, User>();

export async function POST(request: NextRequest) {
  try {
    const { email, password, name }: RegisterData = await request.json();

    // Check if user already exists
    if (users.has(email)) {
      return NextResponse.json(
        { message: 'User already exists' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user: User = {
      id: Math.random().toString(36).substring(7), // Generate random ID - use UUID in production
      email,
      name,
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // Save user to database
    users.set(email, user);

    // Generate JWT token
    const token = sign(
      { userId: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: '30d' }
    );

    // Create response
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...userWithoutPassword } = user;
    const response = NextResponse.json({
      user: userWithoutPassword,
      token,
    } as AuthResponse);

    // Set auth token cookie
    response.cookies.set({
      name: 'auth-token',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });

    return response;
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
