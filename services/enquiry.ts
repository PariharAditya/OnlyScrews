import type { Enquiry } from '@/types/enquiry';

const API_BASE = '/api/enquiry';

export async function createEnquiry(payload: Partial<Enquiry>) {
  const res = await fetch(API_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || 'Failed to create enquiry');
  }

  return res.json();
}
