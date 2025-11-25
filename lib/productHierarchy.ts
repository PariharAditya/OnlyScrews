import { ProductHierarchy } from '@/types/product';

export const productHierarchy: ProductHierarchy[] = [
    {
        mainCategory: 'Screws',
        slug: 'screws',
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
                        slug: 'truss-phillips',
                    },
                ],
            },
            {
                name: 'Self tapping Screws',
                slug: 'self-tapping-screws',
                subcategories: [
                    {
                        name: 'STS Pan Phillips',
                        slug: 'sts-pan-phillips',
                    },
                    {
                        name: 'STS CSK Phillips',
                        slug: 'sts-csk-phillips',
                    },
                    {
                        name: 'STS WW Pan Phillips',
                        slug: 'sts-ww-pan-phillips',
                    },
                    {
                        name: 'STS Pan B Type',
                        slug: 'sts-pan-b-type',
                    },
                    {
                        name: 'STS CSK B Type',
                        slug: 'sts-csk-b-type',
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
        categories: [
            {
                name: 'Bolts',
                slug: 'bolts',
                subcategories: [
                    {
                        name: 'Bolt',
                        slug: 'bolt',
                        types: [
                            'Hex Bolt',
                            'Hex Bolt Half Threaded',
                            'Dome Bolt',
                            'Flange Button Head Bolt',
                            'Wing Bolt',
                            'Allen Bolt',
                            'Shoulder Bolt',
                            'Coaach Bolt',
                            'Flange Bolt',
                            'Allen CSK Bolt',
                            'U-Bolt',
                            'T-Bolt',
                            'Carriage Bolt',
                            'Button Head Bolt',
                            'Eye Bolt',
                            'J-Bolt',
                            'Hook Bolt',
                            'Nylon Hex Bolt'
                        ]
                    }
                ],
            }
        ],
    },
    {
        mainCategory: 'Nuts',
        slug: 'nuts',
        categories: [
            {
                name: 'NUTS',
                slug: 'nuts',
                subcategories: [
                    {
                        name: 'General Nuts',
                        slug: 'general-nuts',
                        types: [
                            'Hex Nut',
                            'Dome Nut',
                            'Cage Nut',
                            'Insert Nut (LF)',
                            'Insert Nut (RF)',
                            'Keps(K) Nut',
                            'Flange Nyloc Nut',
                            'Lock Nut',
                            'Pronge Tee Nut',
                            'Long Nut',
                            'Rivet Nut',
                            'Weld Nut',
                            'Profilp side Nut',
                            'Semi Hex Nut (RF)',
                            'Full Hex Nut (RF)',
                            'Square Weld Nut',
                            'Flange Nut',
                            'Wing Nut',
                            'Square Nut',
                            'Nyloc Nut',
                            'Insert (D) Nut',
                            'Metal Lock Nut',
                            'Mosflo (T) Nut',
                            'Profilp (T) Nut',
                            'Shear Nut',
                            'Semi Hex Nut (LF)',
                            'Full Hex Nut (LF)',
                            'Barrel Nut',
                            'Clinch Nut'
                        ]
                    }
                ],
            },
        ],
    },
    {
        mainCategory: 'Anchors',
        slug: 'anchors',
        categories: [
            {
                name: 'Wall Anchors',
                slug: 'wall-anchors',
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
                        name: 'Sheild Anchor',
                        slug: 'sheild-anchor',
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
        categories: [
            {
                name: 'Spacers',
                slug: 'spacers',
                subcategories: [
                    {
                        name: 'Spacer',
                        slug: 'spacer',
                        types: [
                            'Hex Spacer',
                            'Hex ET Spacer',
                            'Nylon Round Plain Spacer',
                            'Nylon Hex Spacer',
                            'Nylon ET Spacer'
                        ]
                    }
                ],
            }
        ],
    },
    {
        mainCategory: 'Stand-Offs',
        slug: 'stand-offs',
        categories: [
            {
                name: 'Stand-Offs',
                slug: 'stand-offs',
                subcategories: [
                    {
                        name: 'Stand Off',
                        slug: 'stand-off',
                        types: [
                            'Blind Stand Off',
                            'Through Hole Stand Off'
                        ]
                    },
                ],
            },
        ],
    },
    {
        mainCategory: 'Rivets and Dowels',
        slug: 'rivets',
        categories: [
            {
                name: 'Rivets',
                slug: 'rivets',
                subcategories: [
                    {
                        name: 'Solid Dowel Pin',
                        slug: 'solid-dowel-pin',
                    },
                    {
                        name: 'Spring Dowel Pin',
                        slug: 'spring-dowel-pin',
                    },
                    {
                        name: 'Cotter Pin',
                        slug: 'cotter-pin',
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
        categories: [
            {
                name: 'Washers',
                slug: 'washers',
                subcategories: [
                    {
                        name: 'Washer',
                        slug: 'washer',
                        types: [
                            'Plain Washer',
                            'Fibre Washer',
                            'Nylon Plain Washer',
                            'Taper Washer',
                            'Spring Washer',
                            'Chakri Washer',
                            'Conical Disc Washer',
                            'Conical-Disk Washer',
                            'Ext-Tooth Washer',
                            'Wave Washer',
                            'Int-Tooth Washer',
                            'Ext-Star Washer',
                            'Int-Star Washer',
                            'Wedge Lock Washer',
                            'Circlip type A',
                            'Circlip type B',
                            'Circlip type E'
                        ]
                    }
                ],
            },
        ],
    },
];