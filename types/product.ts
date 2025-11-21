// Product Type Definitions

export interface ProductSubCategory {
    id: string;
    name: string;
    slug: string;
    parentId: string;
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
    items: {
        name: string;
        slug: string;
    }[];
}