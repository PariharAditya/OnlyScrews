// Product Type Definitions

export interface ProductSubCategory {
    id?: string; // Optional - only present in API responses
    name: string;
    slug: string;
    types?: string[];
}

export interface ProductCategory {
    id?: string; // Optional - only present in API responses
    name: string;
    slug: string;
    description?: string;
    image?: string;
    subcategories?: ProductSubCategory[];
    types?: string[];
}

export interface ProductHierarchy {
    mainCategory: string;
    slug: string;
    categories: ProductCategory[];
    isFlat?: boolean;
}

// Size Availability Types
export interface SizeItem {
    size: string;
    available: boolean;
}

export interface MaterialSizeAvailability {
    materialId: string;
    materialName: string;
    materialSlug: string;
    sizes: SizeItem[];
}

export interface ProductSizeAvailabilityResponse {
    productId: string;
    productName: string;
    productSlug: string;
    materials: MaterialSizeAvailability[];
}