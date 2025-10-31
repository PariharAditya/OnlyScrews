import { ProductHierarchy } from '@/types/product';

const API_BASE = '/api/products';

export async function fetchProductHierarchy(): Promise<ProductHierarchy[]> {
    try {
        const res = await fetch(`${API_BASE}/hierarchy`, {
            cache: 'no-store', // Always get fresh data
        });

        if (!res.ok) {
            throw new Error('Failed to fetch product hierarchy');
        }

        const data = await res.json();
        return data.data;
    } catch (error) {
        console.error('Error fetching product hierarchy:', error);
        return [];
    }
}

export async function fetchCategoryProducts(categorySlug: string) {
    try {
        const res = await fetch(`${API_BASE}/category/${categorySlug}`);

        if (!res.ok) {
            throw new Error('Failed to fetch category products');
        }

        return res.json();
    } catch (error) {
        console.error('Error fetching category products:', error);
        return { products: [] };
    }
}
