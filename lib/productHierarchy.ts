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
                        types: ['SHCS Machine Screws', 'BHCS Machine Screws', 'CSK Machine Screws', 'GRUB Screws', 'JCB Screws']
                    },
                    {
                        name: 'Torx Machine Screws',
                        slug: 'torx-machine-screws',
                        types: ['Pan Torx', 'CSK Torx', 'Security Pan Torx', 'Security CSK Torx']
                    },
                    {
                        name: 'Phillip Machine Screws',
                        slug: 'phillip-machine-screws',
                    },
                    {
                        name: 'Slotted Machine Screws',
                        slug: 'slotted-machine-screws',
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
                        name: 'Water Head SDS',
                        slug: 'water-head-sds',
                    },
                ],
            },
            {
                name: 'Self tapping Screws',
                slug: 'self-tapping-screws',
                subcategories: [
                    {
                        name: 'Slotted STS',
                        slug: 'slotted-sts',
                    },
                    {
                        name: 'Phillip STS',
                        slug: 'phillip-sts',
                    },
                    {
                        name: 'Hex STS',
                        slug: 'hex-sts',
                    },
                    {
                        name: 'Allen STS',
                        slug: 'allen-sts',
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
                name: 'Hex Bolts',
                slug: 'hex-bolts',
                subcategories: [
                    {
                        name: 'Hex Bolt',
                        slug: 'hex-bolt',
                    },
                    {
                        name: 'Hex Bolt Half Threaded',
                        slug: 'hex-bolt-half-threaded',
                    },
                ],
            },
            {
                name: 'Specialty Bolts',
                slug: 'specialty-bolts',
                subcategories: [
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
                        name: 'Coaach Bolt',
                        slug: 'coaach-bolt',
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
                    },
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
                name: 'Metal Spacers',
                slug: 'metal-spacers',
                subcategories: [
                    {
                        name: 'Hex Spacer',
                        slug: 'hex-spacer',
                    },
                    {
                        name: 'Hex ET Spacer',
                        slug: 'hex-et-spacer',
                    },
                ],
            },
            {
                name: 'Nylon Spacers',
                slug: 'nylon-spacers',
                subcategories: [
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
                    },
                ],
            },
        ],
    },
    {
        mainCategory: 'Stand-Offs',
        slug: 'stand-offs',
        categories: [
            {
                name: 'Mounting Stand-Offs',
                slug: 'mounting-stand-offs',
                subcategories: [
                    {
                        name: 'Blind Stand Off',
                        slug: 'blind-stand-off',
                    },
                    {
                        name: 'Through Hole Stand Off',
                        slug: 'through-hole-stand-off',
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
                name: 'Solid Rivets',
                slug: 'solid-rivets',
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
                name: 'Standard Washers',
                slug: 'standard-washers',
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
                        slug: 'nylon-plain-washer',
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
                        slug: 'chakri-washer',
                    },
                ],
            },
            {
                name: 'Specialty Washers',
                slug: 'specialty-washers',
                subcategories: [
                    {
                        name: 'Conical-Disk Washer',
                        slug: 'conical-disk-washer',
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
                    },
                ],
            },
        ],
    },
];
