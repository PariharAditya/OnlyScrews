'use client';

export const dynamic = 'force-dynamic';
export const runtime = 'edge';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            User Profile
          </h2>
          <p className="text-gray-600">
            Authentication is currently disabled
          </p>
        </div>
      </div>
    </div>
  );
}
