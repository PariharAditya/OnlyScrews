'use client';
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <SignUp
        appearance={{
          elements: {
            formButtonPrimary: 'bg-[#6A20CD] hover:bg-[#5618A8]',
            footerActionLink: 'text-[#6A20CD] hover:text-[#5618A8]',
          },
        }}
      />
    </div>
  );
}
