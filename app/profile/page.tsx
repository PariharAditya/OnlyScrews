'use client';
import { UserProfile } from "@clerk/nextjs";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <UserProfile 
          appearance={{
            elements: {
              formButtonPrimary: 'bg-[#6A20CD] hover:bg-[#5618A8]',
              navbarButton: 'text-[#6A20CD] hover:text-[#5618A8]',
            },
          }}
          path="/profile"
        />
      </div>
    </div>
  );
}
