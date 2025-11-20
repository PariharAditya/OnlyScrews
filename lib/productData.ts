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
