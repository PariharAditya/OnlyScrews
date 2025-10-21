import type { AuthResponse, LoginCredentials, RegisterData, UserWithoutPassword } from '@/types/auth';

const API_BASE_URL = '/api/auth';

async function handleResponse<T>(response: Response): Promise<T> {
  const data = await response.json();
  
  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }
  
  return data as T;
}

export async function login(credentials: LoginCredentials): Promise<AuthResponse> {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  return handleResponse<AuthResponse>(response);
}

export async function register(data: RegisterData): Promise<AuthResponse> {
  const response = await fetch(`${API_BASE_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return handleResponse<AuthResponse>(response);
}

export async function logout(): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/logout`, {
    method: 'POST',
  });

  return handleResponse<void>(response);
}

export async function getCurrentUser(): Promise<UserWithoutPassword | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/me`);
    return handleResponse<UserWithoutPassword>(response);
  } catch {
    return null;
  }
}

// Helper function to get the auth token from cookies
export function getAuthToken(): string | null {
  const cookies = document.cookie.split(';');
  const tokenCookie = cookies.find(c => c.trim().startsWith('auth-token='));
  return tokenCookie ? tokenCookie.split('=')[1] : null;
}
