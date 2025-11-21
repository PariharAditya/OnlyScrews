// Import all category data
import { screwsData } from './productData/screws';
import { boltsData } from './productData/bolts';
import { nutsData } from './productData/nuts';
import { washersData } from './productData/washers';
import { standoffsData } from './productData/standoffs';
import { anchorsData } from './productData/anchors';
import { spacersData } from './productData/spacers';
import { rivetsData } from './productData/rivets';

// Merge all product data into a single object
// Merge all category data
const mergedData: Record<string, any> = {
  ...screwsData,
  ...boltsData,
  ...nutsData,
  ...washersData,
  ...standoffsData,
  ...anchorsData,
  ...spacersData,
  ...rivetsData,
};

// Normalize washer specification labels to "Application" so ProductDetail shows bullets only.
// This avoids needing to edit every washer file entry individually.
Object.keys(washersData).forEach((key) => {
  const item = mergedData[key];
  if (item && Array.isArray(item.specifications)) {
    item.specifications = item.specifications.map((spec: any) => ({
      label: 'Application',
      value: spec.value,
    }));
  }
});

export const productData: Record<string, any> = mergedData;
