declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_APP_URL: string;
      // Add other environment variables here
      NODE_ENV: 'development' | 'production' | 'test';
    }
  }
}