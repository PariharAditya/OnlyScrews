# Product Data Management Guide

## Modular Product Detail System

Your site now uses a **single, reusable ProductDetail component** that displays all products through the dynamic route `/category/[slug]`. This eliminates code duplication and makes it easy to add new products.

## Architecture

### 1. Dynamic Route
- **File**: `app/category/[slug]/page.tsx`
- **Purpose**: Looks up product by slug in `productData` and renders `ProductDetail` component
- **URL Pattern**: `/category/product-slug`

### 2. Product Data File
- **File**: `lib/productData.ts`
- **Purpose**: Centralized product information (images, materials, specs, descriptions)
- **Structure**: JavaScript object with product slugs as keys

### 3. Product Detail Component
- **File**: `components/ProductDetail.tsx`
- **Purpose**: Reusable UI component that displays product information
- **Features**: Image carousel, material selector, tabs, quote modal

## How to Add a New Product

### Step 1: Add Product Data

Open `lib/productData.ts` and add a new entry following this template:

```typescript
"your-product-slug": {
  title: "Product Name | Features | Benefits | Keywords for SEO",
  images: [
    "/images/products/category/product-image-1.png",
    "/images/products/category/product-image-2.png",
    "/images/products/category/product-image-3.png",
  ],
  materials: [
    { 
      id: 1, 
      name: "Stainless Steel 304", 
      color: "from-purple-300 to-pink-400", 
      image: "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=600&h=400&fit=crop" 
    },
    { 
      id: 2, 
      name: "Mild Steel", 
      color: "from-gray-300 to-slate-400", 
      image: "https://images.unsplash.com/photo-1504907762671-07cfb4351d39?w=600&h=400&fit=crop" 
    },
    // Add more materials as needed
  ],
  about: "Detailed description of the product, its features, benefits, and common use cases. This appears in the 'About this piece' tab.",
  specifications: [
    { label: "Material Type", value: "Stainless Steel" },
    { label: "Thread Size", value: "M6 - M20" },
    { label: "Finish", value: "Polished" },
    { label: "Application", value: "General Purpose" },
    // Add more specifications as needed
  ],
},
```

### Step 2: Update Product Listing Page

In your category listing page (e.g., `app/products/bolts/page.tsx`), add the product to the array:

```typescript
const bolts = [
  { 
    title: "Your Product Name", 
    slug: "your-product-slug",  // Must match the slug in productData.ts
    image: "/images/products/category/product-image.png" 
  },
  // ... other products
];
```

Make sure the `href` in the ProductCategoryCard uses `/category/${slug}`:

```typescript
<ProductCategoryCard
  key={product.slug}
  title={product.title}
  imageSrc={product.image}
  href={`/category/${product.slug}`}  // ✅ Correct - uses common route
/>
```

### Step 3: Done!

That's it! No need to create new pages. The product will automatically be available at `/category/your-product-slug`.

## Current Product Coverage

### ✅ Already Added
- **Machine Screws**: SHCS, BHCS, CSK, Grub, Pan Torx, CSK Torx, Security variants, Philip, Slotted
- **SEMS Screws**: Pan SEM, Hex SEM
- **Self-Tapping Screws**: Slotted, Phillip, Hex, Allen, Pan Torx, CSK Torx
- **Self-Drilling Screws**: Pan SDS, Hex SDS, CSK SDS, Wafer Head SDS
- **Bolts**: Hex Bolt, Hex Bolt Half Threaded (2 samples added)
- **Nuts**: Hex Nut, Nyloc Nut (2 samples added)
- **Washers**: Plain Washer, Spring Washer (2 samples added)
- **Standoffs**: Blind Stand Off, Through Hole Stand Off

### 📝 To Add (Following Same Pattern)

You can add entries for the remaining products from your listing pages:

#### Bolts
- dome-bolt, flange-button-head-bolt, wing-bolt, allen-bolt, shoulder-bolt, coach-bolt, flange-bolt, nylon-hex-bolt, allen-csk-bolt, u-bolt, t-bolt, carriage-bolt, button-head-bolt, eye-bolt, j-bolt, hook-bolt

#### Nuts
- cage-nut, square-weld-nut, flange-nut, wing-nut, square-nut, dome-nut, insert-nut-lf, insert-nut-rf, keps-k-nut, flange-nyloc-nut, lock-nut, prongs-tee-nut, long-nut, insert-d-nut, metal-lock-nut, rivet-nut, profile-t-nut, weld-nut, shear-nut, profile-side-nut, semi-hex-nut-lf, semi-hex-nut-rf, full-hex-nut-lf, full-hex-nut-rf

#### Washers
- fibre-washer, nylon-round-plain-washer, wave-washer, ext-star-washer, wedge-lock-washer, taper-washer, ext-tooth-washer, int-tooth-washer, int-star-washer, circlip-type-a, circlip-type-b, circlip-type-e

## Common Material Options

Use these material configurations in your product data:

```typescript
// Stainless Steel Set
{ id: 1, name: "Stainless Steel 202", color: "from-blue-300 to-green-400", image: "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=600&h=400&fit=crop" },
{ id: 2, name: "Stainless Steel 304", color: "from-purple-300 to-pink-400", image: "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=600&h=400&fit=crop" },
{ id: 3, name: "Stainless Steel 316", color: "from-orange-300 to-yellow-400", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=400&fit=crop" },

// Steel Set
{ id: 4, name: "Mild Steel", color: "from-gray-300 to-slate-400", image: "https://images.unsplash.com/photo-1504907762671-07cfb4351d39?w=600&h=400&fit=crop" },
{ id: 5, name: "Galvanized Steel", color: "from-slate-300 to-zinc-400", image: "https://images.unsplash.com/photo-1504907762671-07cfb4351d39?w=600&h=400&fit=crop" },
{ id: 6, name: "Black Oxide", color: "from-slate-400 to-gray-600", image: "https://images.unsplash.com/photo-1504907762671-07cfb4351d39?w=600&h=400&fit=crop" },

// Other Materials
{ id: 7, name: "Brass", color: "from-yellow-200 to-amber-400", image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&h=400&fit=crop" },
{ id: 8, name: "Nylon", color: "from-green-300 to-teal-400", image: "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=600&h=400&fit=crop" },
{ id: 9, name: "Aluminum", color: "from-gray-200 to-slate-300", image: "https://images.unsplash.com/photo-1504907762671-07cfb4351d39?w=600&h=400&fit=crop" },
```

## Testing

After adding a product:

1. **Start dev server**: `npm run dev`
2. **Navigate to category page**: e.g., `/products/bolts`
3. **Click on your product card**
4. **Verify**: You should see the ProductDetail page at `/category/your-product-slug`
5. **Check**:
   - Images display correctly
   - Material selector works
   - Tabs show correct content
   - Quote modal functions

## Benefits of This Approach

✅ **No Code Duplication** - One ProductDetail component for all products  
✅ **Easy Maintenance** - Update styling in one place  
✅ **Fast to Add Products** - Just add data, no new pages  
✅ **Consistent UX** - All products look and behave the same  
✅ **SEO Friendly** - Dynamic routes with proper meta tags  
✅ **Type Safe** - TypeScript ensures data structure consistency
