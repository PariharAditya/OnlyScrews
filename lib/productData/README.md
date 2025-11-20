# Product Data Modular Structure

## Overview
The product data has been reorganized into a modular structure to improve maintainability and scalability.

## Directory Structure
```
lib/productData/
├── screws.ts        - All screw products (machine, self-tapping, self-drilling)
├── bolts.ts         - All bolt products (18 types)
├── nuts.ts          - All nut products (26 types)
├── washers.ts       - All washer products (14 types)
├── standoffs.ts     - All standoff products (5 types)
├── anchors.ts       - All anchor products (7 types)
├── spacers.ts       - All spacer products (5 types)
└── rivets.ts        - All rivet/dowel products (4 types)
```

## Product Categories

### Screws (screws.ts)
- **Machine Screws**: SHCS, BHCS, CSK, Grub, Pan Torx, CSK Torx, Security Torx, SEM screws
- **Self-Tapping Screws**: Slotted, Philip, Hex, Allen, Pan Torx, CSK Torx variants
- **Self-Drilling Screws**: Pan, Hex, CSK, Wafer variants

### Bolts (bolts.ts)
1. Hex Bolt
2. Dome Bolt
3. Flange Button Head Bolt
4. Wing Bolt
5. Hex Bolt Half Threaded
6. Allen Bolt
7. Shoulder Bolt
8. Coach Bolt
9. Flange Bolt
10. Nylon Hex Bolt
11. Allen CSK Bolt
12. U-Bolt
13. T-Bolt
14. Carriage Bolt
15. Button Head Bolt
16. Eye Bolt
17. J-Bolt
18. Hook Bolt

### Nuts (nuts.ts)
1. Hex Nut
2. Cage Nut
3. Square Weld Nut
4. Flange Nut
5. Wing Nut
6. Square Nut
7. Dome Nut
8. Insert Nut LF
9. Insert Nut RF
10. Keps K-Nut
11. Flange Nyloc Nut
12. Lock Nut
13. Prongs Tee Nut
14. Nyloc Nut
15. Long Nut
16. Insert D-Nut
17. Metal Lock Nut
18. Rivet Nut
19. Profile T-Nut
20. Weld Nut
21. Shear Nut
22. Profile Side Nut
23. Semi Hex Nut LF
24. Semi Hex Nut RF
25. Full Hex Nut LF
26. Full Hex Nut RF

### Washers (washers.ts)
1. Plain Washer
2. Spring Washer
3. Wave Washer
4. Star Washer
5. Fender Washer
6. Countersunk Washer
7. Nylon Washer
8. Nord Lock Washer
9. Belleville Washer
10. Tab Washer
11. Internal Tooth Lock Washer
12. C-Washer
13. Square Washer
14. Curved Washer

### Standoffs (standoffs.ts)
1. Hex Standoff
2. Round Standoff
3. Nylon Round Plain Spacer
4. PCB Standoff
5. Knurled Standoff

### Anchors (anchors.ts)
1. Wedge Anchor
2. Pin Type Anchor
3. Drop In Anchor
4. Sleeve Anchor
5. Chemical Anchor
6. Rawl Plug
7. Toggle Bolt

### Spacers (spacers.ts)
1. Hex Spacer
2. Nylon Round Plain Spacer
3. Round Spacer
4. Aluminum Spacer
5. Fiberglass Spacer

### Rivets/Dowels (rivets.ts)
1. Solid Dowel Pin
2. Spring Dowel Pin Cotter
3. Grooved Pin
4. Clevis Pin

## Usage

All category files export a data object (e.g., `screwsData`, `boltsData`) which is imported and merged in the main `lib/productData.ts` file:

```typescript
import { screwsData } from './productData/screws';
import { boltsData } from './productData/bolts';
// ... other imports

export const productData: Record<string, any> = {
  ...screwsData,
  ...boltsData,
  ...nutsData,
  ...washersData,
  ...standoffsData,
  ...anchorsData,
  ...spacersData,
  ...rivetsData,
};
```

## Product Data Structure

Each product entry follows this structure:

```typescript
"product-slug": {
  title: "Product Title | Features | Materials",
  images: [
    "/images/products/category/product.png",
    "/images/products/category/product.png",
    "/images/products/category/product.png",
  ],
  materials: [
    { 
      id: 1, 
      name: "Material Name", 
      color: "from-color-300 to-color-400", 
      image: "https://..." 
    },
    // 4-7 material options
  ],
  about: "Detailed product description...",
  specifications: [
    { label: "Spec Name", value: "Spec Value" },
    // 6 key specifications
  ],
}
```

## Adding New Products

1. Find the appropriate category file (screws.ts, bolts.ts, etc.)
2. Add new product entry using the structure above
3. Use kebab-case for product slug (e.g., "hex-bolt")
4. Include 3 product images
5. Provide 4-7 material options with colors and images
6. Write descriptive "about" section
7. Add 6 key specifications

## Routing

All products use a single dynamic route: `/category/[slug]/page.tsx`

Listing pages link to products using: `/category/product-slug`

Example:
- Listing: `/products/bolts/page.tsx` links to `/category/hex-bolt`
- Detail page: Renders at `/category/hex-bolt` using ProductDetail component

## Benefits

✅ **Modular**: Each category in its own file (easier to maintain)
✅ **Scalable**: Add 100+ products without a single huge file
✅ **No Code Duplication**: Single ProductDetail component for all products
✅ **Single Route**: One dynamic route handles all products
✅ **Type-Safe**: TypeScript ensures data consistency
✅ **Easy Navigation**: Clear file structure by product category

## Total Products

- **Screws**: ~30 products
- **Bolts**: 18 products
- **Nuts**: 26 products
- **Washers**: 14 products
- **Standoffs**: 5 products
- **Anchors**: 7 products
- **Spacers**: 5 products
- **Rivets/Dowels**: 4 products

**Total**: ~109 products with ProductDetail page
