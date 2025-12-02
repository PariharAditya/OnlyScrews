import { ProductHierarchy } from '@/types/product';

export const productHierarchy: ProductHierarchy[] = [
    {
        mainCategory: 'Screws',
        slug: 'screws',
        isFlat: false, // Screws has distinct categories
        categories: [
            {
                name: 'Machine Screws',
                slug: 'machine-screws',
                subcategories: [
                    {
                        name: 'Allen Screws',
                        slug: 'allen-screws',
                        types: ['SHCS Machine Screws', 'BHCS Machine Screws', 'CSK Machine Screws', 'GRUB Screws', 'JCB Screws', 'Flange Button Head']
                    },
                    {
                        name: 'Torx Machine Screws',
                        slug: 'torx-machine-screws',
                        types: ['Pan Torx', 'CSK Torx', 'Security Pan Torx', 'Security CSK Torx']
                    },
                    {
                        name: 'Phillip Machine Screws',
                        slug: 'phillip-machine-screws',
                        types: ['Pan Head Phillips', 'CSK Head Phillips', 'Truss Head Phillips', 'WW Pan Phillips']
                    },
                    {
                        name: 'Slotted Machine Screws',
                        slug: 'slotted-machine-screws',
                        types: ['CSK Slotted', 'Cheese Head Slotted', 'Round Head Slotted']
                    },
                    {
                        name: 'SEMS Screws',
                        slug: 'sems-screws',
                        types: ['Pan SEM', 'Hex SEM']
                    },
                ],
            },
            {
                name: 'Self Drilling Screws',
                slug: 'self-drilling-screws',
                subcategories: [
                    {
                        name: 'Pan SDS',
                        slug: 'pan-sds',
                    },
                    {
                        name: 'Hex SDS',
                        slug: 'hex-sds',
                    },
                    {
                        name: 'CSK SDS',
                        slug: 'csk-sds',
                    },
                    {
                        name: 'Truss Phillips',
                        slug: 'truss-phillips-sds',
                    },
                ],
            },
            {
                name: 'Self tapping Screws',
                slug: 'self-tapping-screws',
                subcategories: [
                    {
                        name: 'STS Pan Phillips',
                        slug: 'pan-phillips-sts',
                    },
                    {
                        name: 'STS CSK Phillips',
                        slug: 'csk-phillips-sts',
                    },
                    {
                        name: 'STS WW Pan Phillips',
                        slug: 'ww-pan-phillips-sts',
                    },
                    {
                        name: 'STS Pan B Type',
                        slug: 'pan-b-type-sts',
                    },
                    {
                        name: 'STS CSK B Type',
                        slug: 'csk-b-type-sts',
                    },
                    {
                        name: 'Torx STS',
                        slug: 'torx-sts',
                        types: ['Pan Torx STS', 'CSK Torx STS']
                    },
                ],
            },
        ],
    },
    {
        mainCategory: 'Bolts',
        slug: 'bolts',
        isFlat: true, // Bolts category name = main category name
        categories: [
            {
                name: 'Bolts',
                slug: 'bolts',
                subcategories: [
                    {
                        name: 'Hex Bolt',
                        slug: 'hex-bolt',
                    },
                    {
                        name: 'Hex Bolt Half Threaded',
                        slug: 'hex-bolt-half-threaded',
                    },
                    {
                        name: 'Dome Bolt',
                        slug: 'dome-bolt',
                    },
                    {
                        name: 'Flange Button Head Bolt',
                        slug: 'flange-button-head-bolt',
                    },
                    {
                        name: 'Wing Bolt',
                        slug: 'wing-bolt',
                    },
                    {
                        name: 'Allen Bolt',
                        slug: 'allen-bolt',
                    },
                    {
                        name: 'Shoulder Bolt',
                        slug: 'shoulder-bolt',
                    },
                    {
                        name: 'Coach Bolt',
                        slug: 'coach-bolt',
                    },
                    {
                        name: 'Flange Bolt',
                        slug: 'flange-bolt',
                    },
                    {
                        name: 'Allen CSK Bolt',
                        slug: 'allen-csk-bolt',
                    },
                    {
                        name: 'U-Bolt',
                        slug: 'u-bolt',
                    },
                    {
                        name: 'T-Bolt',
                        slug: 't-bolt',
                    },
                    {
                        name: 'Carriage Bolt',
                        slug: 'carriage-bolt',
                    },
                    {
                        name: 'Button Head Bolt',
                        slug: 'button-head-bolt',
                    },
                    {
                        name: 'Eye Bolt',
                        slug: 'eye-bolt',
                    },
                    {
                        name: 'J-Bolt',
                        slug: 'j-bolt',
                    },
                    {
                        name: 'Hook Bolt',
                        slug: 'hook-bolt',
                    },
                    {
                        name: 'Nylon Hex Bolt',
                        slug: 'nylon-hex-bolt',
                    }
                ],
            }
        ],
    },
    {
        mainCategory: 'Nuts',
        slug: 'nuts',
        isFlat: true,
        categories: [
            {
                name: 'Nuts',
                slug: 'nuts',
                subcategories: [
                    {
                        name: 'Hex Nut',
                        slug: 'hex-nut',
                    },
                    {
                        name: 'Dome Nut',
                        slug: 'dome-nut',
                    },
                    {
                        name: 'Cage Nut',
                        slug: 'cage-nut',
                    },
                    {
                        name: 'Insert Nut (LF)',
                        slug: 'insert-nut-lf',
                    },
                    {
                        name: 'Insert Nut (RF)',
                        slug: 'insert-nut-rf',
                    },
                    {
                        name: 'Keps (K) Nut',
                        slug: 'keps-k-nut',
                    },
                    {
                        name: 'Flange Nyloc Nut',
                        slug: 'flange-nyloc-nut',
                    },
                    {
                        name: 'Lock Nut',
                        slug: 'lock-nut',
                    },
                    {
                        name: 'Prongs Tee Nut',
                        slug: 'prongs-tee-nut',
                    },
                    {
                        name: 'Long Nut',
                        slug: 'long-nut',
                    },
                    {
                        name: 'Rivet Nut',
                        slug: 'rivet-nut',
                    },
                    {
                        name: 'Weld Nut',
                        slug: 'weld-nut',
                    },
                    {
                        name: 'Profile side Nut',
                        slug: 'profile-side-nut',
                    },
                    {
                        name: 'Semi Hex Nut (RF)',
                        slug: 'semi-hex-nut-rf',
                    },
                    {
                        name: 'Full Hex Nut (RF)',
                        slug: 'full-hex-nut-rf',
                    },
                    {
                        name: 'Square Weld Nut',
                        slug: 'square-weld-nut',
                    },
                    {
                        name: 'Flange Nut',
                        slug: 'flange-nut',
                    },
                    {
                        name: 'Wing Nut',
                        slug: 'wing-nut',
                    },
                    {
                        name: 'Square Nut',
                        slug: 'square-nut',
                    },
                    {
                        name: 'Nyloc Nut',
                        slug: 'nyloc-nut',
                    },
                    {
                        name: 'Insert (D) Nut',
                        slug: 'insert-d-nut',
                    },
                    {
                        name: 'Metal Lock Nut',
                        slug: 'metal-lock-nut',
                    },
                    {
                        name: 'Profile (T) Nut',
                        slug: 'profile-t-nut',
                    },
                    {
                        name: 'Shear Nut',
                        slug: 'shear-nut',
                    },
                    {
                        name: 'Semi Hex Nut (LF)',
                        slug: 'semi-hex-nut-lf',
                    },
                    {
                        name: 'Full Hex Nut (LF)',
                        slug: 'full-hex-nut-lf',
                    },
                    {
                        name: 'Barrel Nut',
                        slug: 'barrel-nut',
                    },
                    {
                        name: 'Clinch Nut',
                        slug: 'clinch-nut',
                    }
                ],
            },
        ],
    },
    {
        mainCategory: 'Anchors',
        slug: 'anchors',
        isFlat: true,
        categories: [
            {
                name: 'Anchors',
                slug: 'anchors',
                subcategories: [
                    {
                        name: 'Wedge Anchor',
                        slug: 'wedge-anchor',
                    },
                    {
                        name: 'Sleeve Anchor',
                        slug: 'sleeve-anchor',
                    },
                    {
                        name: 'Pin-Type Anchor',
                        slug: 'pin-type-anchor',
                    },
                    {
                        name: 'Shield Anchor',
                        slug: 'shield-anchor',
                    },
                    {
                        name: 'Tam Anchor',
                        slug: 'tam-anchor',
                    },
                    {
                        name: 'Drop-In Anchor',
                        slug: 'drop-in-anchor',
                    },
                    {
                        name: 'Taper Anchor',
                        slug: 'taper-anchor',
                    },
                ],
            },
        ],
    },
    {
        mainCategory: 'Spacers',
        slug: 'spacers',
        isFlat: true,
        categories: [
            {
                name: 'Spacers',
                slug: 'spacers',
                subcategories: [
                    {
                        name: 'Hex Spacer',
                        slug: 'hex-spacer',
                    },
                    {
                        name: 'Hex ET Spacer',
                        slug: 'hex-et-spacer',
                    },
                    {
                        name: 'Nylon Round Plain Spacer',
                        slug: 'nylon-round-plain-spacer',
                    },
                    {
                        name: 'Nylon Hex Spacer',
                        slug: 'nylon-hex-spacer',
                    },
                    {
                        name: 'Nylon ET Spacer',
                        slug: 'nylon-et-spacer',
                    }
                ],
            }
        ],
    },
    {
        mainCategory: 'Stand-Offs',
        slug: 'stand-offs',
        isFlat: true,
        categories: [
            {
                name: 'Stand-Offs',
                slug: 'stand-offs',
                subcategories: [
                    {
                        name: 'Blind Stand Off',
                        slug: 'blind-stand-off',
                    },
                    {
                        name: 'Through Hole Stand Off',
                        slug: 'through-hole-stand-off',
                    }
                ],
            },
        ],
    },
    {
        mainCategory: 'Rivets and Dowels',
        slug: 'rivets',
        isFlat: true,
        categories: [
            {
                name: 'Rivets and Dowels',
                slug: 'rivets',
                subcategories: [
                    {
                        name: 'Solid Dowel Pin',
                        slug: 'solid-dowel-pin',
                    },
                    {
                        name: 'Spring Dowel Pin',
                        slug: 'spring-dowel-pin-cotter',
                    },
                    {
                        name: 'Cotter Pin',
                        slug: 'cotter-pin-blind-pop-rivet',
                    },
                    {
                        name: 'Blind / POP Rivet',
                        slug: 'blind-pop-rivet',
                    },
                ],
            },
        ],
    },
    {
        mainCategory: 'Washers',
        slug: 'washers',
        isFlat: true,
        categories: [
            {
                name: 'Washers',
                slug: 'washers',
                subcategories: [
                    {
                        name: 'Plain Washer',
                        slug: 'plain-washer',
                    },
                    {
                        name: 'Fibre Washer',
                        slug: 'fibre-washer',
                    },
                    {
                        name: 'Nylon Plain Washer',
                        slug: 'nylon-round-plain-washer',
                    },
                    {
                        name: 'Taper Washer',
                        slug: 'taper-washer',
                    },
                    {
                        name: 'Spring Washer',
                        slug: 'spring-washer',
                    },
                    {
                        name: 'Chakri Washer',
                        slug: 'star-washer',
                    },
                    {
                        name: 'Conical Disc Washer',
                        slug: 'conical-disc-washer',
                    },
                    {
                        name: 'Ext-Tooth Washer',
                        slug: 'ext-tooth-washer',
                    },
                    {
                        name: 'Wave Washer',
                        slug: 'wave-washer',
                    },
                    {
                        name: 'Int-Tooth Washer',
                        slug: 'int-tooth-washer',
                    },
                    {
                        name: 'Ext-Star Washer',
                        slug: 'ext-star-washer',
                    },
                    {
                        name: 'Int-Star Washer',
                        slug: 'int-star-washer',
                    },
                    {
                        name: 'Wedge Lock Washer',
                        slug: 'wedge-lock-washer',
                    },
                    {
                        name: 'Circlip type A',
                        slug: 'circlip-type-a',
                    },
                    {
                        name: 'Circlip type B',
                        slug: 'circlip-type-b',
                    },
                    {
                        name: 'Circlip type E',
                        slug: 'circlip-type-e',
                    }
                ],
            },
        ],
    },
];