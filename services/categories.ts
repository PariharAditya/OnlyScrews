import type { Category } from '@/types/category';

const API_BASE = '/api/categories';

export async function fetchCategories(): Promise<Category[]> {
  const res = await fetch(API_BASE);
  if (!res.ok) throw new Error('Failed to fetch categories');
  return res.json();
}

export async function createCategory(payload: Partial<Category>) {
  const res = await fetch(API_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error('Failed to create category');
  return res.json();
}
