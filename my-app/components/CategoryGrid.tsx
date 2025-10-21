import Link from 'next/link';

interface Category {
  readonly name: string;
  readonly description: string;
  readonly href: string;
  readonly image: string;
  readonly count: string;
}

const categories: Category[] = [
  {
    name: 'Screws',
    description: 'Wood screws, machine screws, self-tapping screws and more',
    href: '/categories/screws',
    image: '/images/screws.jpg',
    count: '50+ Types'
  },
  {
    name: 'Nuts',
    description: 'Hex nuts, lock nuts, wing nuts, and specialized nuts',
    href: '/categories/nuts',
    image: '/images/nuts.jpg',
    count: '30+ Variants'
  },
  {
    name: 'Bolts',
    description: 'Hex bolts, carriage bolts, eye bolts, and U-bolts',
    href: '/categories/bolts',
    image: '/images/bolts.jpg',
    count: '40+ Types'
  },
  {
    name: 'Washers',
    description: 'Flat washers, spring washers, lock washers',
    href: '/categories/washers',
    image: '/images/washers.jpg',
    count: '25+ Variants'
  },
  {
    name: 'Anchors',
    description: 'Chemical anchors, mechanical anchors, sleeve anchors',
    href: '/categories/anchors',
    image: '/images/anchors.jpg',
    count: '20+ Types'
  },
  {
    name: 'All Products',
    description: 'Complete range of industrial fasteners and hardware',
    href: '/categories',
    image: '/images/all-products.jpg',
    count: '200+ Products'
  }
];

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category, index) => (
        <Link
          key={category.name}
          href={category.href}
          className="group bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 overflow-hidden"
        >
          <div className="h-48 bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
              {category.name.charAt(0)}
            </div>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold text-dark group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <span className="text-sm bg-primary text-white px-2 py-1 rounded-full">
                {category.count}
              </span>
            </div>
            <p className="text-gray-600">{category.description}</p>
            <div className="mt-4 text-primary font-medium group-hover:underline">
              Browse Products →
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
