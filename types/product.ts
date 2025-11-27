// Product Type Definitions

export interface ProductSubCategory {
    id: string;
    name: string;
    slug: string;
    types?: string[];
}

export interface ProductCategory {
    id: string;
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