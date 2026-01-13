const vegetables = [
    {
        id: 'spinach',
        name: '菠菜',
        icon: `<svg viewBox="0 0 100 100" class="veg-svg">
                <path d="M50 15 Q80 5 90 30 T80 70 Q50 90 20 70 T10 30 Q20 5 50 15 Z" fill="#4CAF50" stroke="#2E7D32" stroke-width="3"/>
                <path d="M50 15 Q50 40 50 85" stroke="#388E3C" stroke-width="3" fill="none"/>
                <g class="veg-face">
                    <circle cx="35" cy="45" r="5" fill="white"/>
                    <circle cx="35" cy="45" r="2" fill="black"/>
                    <circle cx="65" cy="45" r="5" fill="white"/>
                    <circle cx="65" cy="45" r="2" fill="black"/>
                    <path d="M40 60 Q50 65 60 60" stroke="#2E7D32" stroke-width="2" fill="none"/>
                </g>
               </svg>`,
        label: '补血圣品',
        nutrition: ['铁', '叶酸', '维生素K', '维生素C'],
        effects: ['促进造血', '预防贫血', '增强免疫力'],
        zombieEffect: 'face-color',
        buffText: '+造血能力 UP!',
        color: '#4CAF50',
        description: '大力水手最爱的食物，含有丰富的铁质。'
    },
    {
        id: 'carrot',
        name: '胡萝卜',
        icon: `<svg viewBox="0 0 100 100" class="veg-svg">
                <path d="M30 10 L40 30 L20 20 Z" fill="#2E7D32"/>
                <path d="M50 10 L60 30 L80 20 Z" fill="#2E7D32"/>
                <path d="M40 10 L50 30 L60 5 Z" fill="#388E3C"/>
                <path d="M25 25 Q50 20 75 25 L55 95 Q50 100 45 95 Z" fill="#FF9800" stroke="#E65100" stroke-width="3"/>
                <g class="veg-face">
                    <circle cx="40" cy="45" r="6" fill="white"/>
                    <circle cx="40" cy="45" r="2.5" fill="black"/>
                    <circle cx="60" cy="45" r="6" fill="white"/>
                    <circle cx="60" cy="45" r="2.5" fill="black"/>
                    <path d="M45 60 Q50 65 55 60" stroke="#E65100" stroke-width="2" fill="none"/>
                </g>
               </svg>`,
        label: '明眸护卫',
        nutrition: ['β-胡萝卜素', '维生素A', '膳食纤维'],
        effects: ['保护视力', '增强夜视能力', '维护皮肤健康'],
        zombieEffect: 'eyes',
        buffText: '+夜视能力 UP!',
        color: '#FF9800',
        description: '富含胡萝卜素，对眼睛非常好。'
    },
    {
        id: 'broccoli',
        name: '西兰花',
        icon: `<svg viewBox="0 0 100 100" class="veg-svg">
                <path d="M45 60 L40 90 L60 90 L55 60 Z" fill="#8BC34A" stroke="#558B2F" stroke-width="3"/>
                <circle cx="30" cy="40" r="15" fill="#43A047"/>
                <circle cx="70" cy="40" r="15" fill="#43A047"/>
                <circle cx="50" cy="30" r="20" fill="#4CAF50"/>
                <circle cx="20" cy="55" r="12" fill="#43A047"/>
                <circle cx="80" cy="55" r="12" fill="#43A047"/>
                <g class="veg-face">
                    <circle cx="40" cy="35" r="5" fill="white"/>
                    <circle cx="40" cy="35" r="2" fill="black"/>
                    <circle cx="60" cy="35" r="5" fill="white"/>
                    <circle cx="60" cy="35" r="2" fill="black"/>
                    <path d="M45 45 Q50 50 55 45" stroke="black" stroke-width="2" fill="none"/>
                </g>
               </svg>`,
        label: '肌肉引擎',
        nutrition: ['蛋白质', '维生素C', '维生素K', '叶酸'],
        effects: ['促进肌肉生长', '抗氧化', '增强体质'],
        zombieEffect: 'muscles',
        buffText: '+力量 UP!',
        color: '#8BC34A',
        description: '蔬菜皇冠，增肌减脂必备。'
    },
    {
        id: 'milk',
        name: '牛奶',
        icon: `<svg viewBox="0 0 100 100" class="veg-svg">
                <path d="M30 30 L70 30 L75 90 L25 90 Z" fill="#E3F2FD" stroke="#1976D2" stroke-width="3"/>
                <path d="M30 30 L40 10 L60 10 L70 30 Z" fill="#BBDEFB" stroke="#1976D2" stroke-width="3"/>
                <rect x="35" y="50" width="30" height="20" fill="#1976D2" rx="2"/>
                <text x="50" y="65" font-size="12" fill="white" text-anchor="middle">MILK</text>
                <g class="veg-face">
                    <circle cx="40" cy="40" r="4" fill="black"/>
                    <circle cx="39" cy="39" r="1" fill="white"/>
                    <circle cx="60" cy="40" r="4" fill="black"/>
                    <circle cx="59" cy="39" r="1" fill="white"/>
                    <path d="M45 80 Q50 85 55 80" stroke="#1976D2" stroke-width="2" fill="none"/>
                </g>
               </svg>`,
        label: '骨骼强化剂',
        nutrition: ['钙', '蛋白质', '维生素D'],
        effects: ['强健骨骼', '促进生长', '预防骨质疏松'],
        zombieEffect: 'bones',
        buffText: '+骨密度 UP!',
        color: '#E3F2FD',
        description: '白色血液，补钙首选。'
    },
    {
        id: 'sesame',
        name: '黑芝麻',
        icon: `<svg viewBox="0 0 100 100" class="veg-svg">
                <ellipse cx="50" cy="50" rx="30" ry="40" fill="#212121" stroke="#424242" stroke-width="2"/>
                <g class="veg-face">
                    <circle cx="40" cy="40" r="6" fill="white"/>
                    <circle cx="40" cy="40" r="2.5" fill="black"/>
                    <circle cx="60" cy="40" r="6" fill="white"/>
                    <circle cx="60" cy="40" r="2.5" fill="black"/>
                    <path d="M45 60 Q50 55 55 60" stroke="white" stroke-width="2" fill="none"/>
                </g>
               </svg>`,
        label: '生发神器',
        nutrition: ['维生素E', '锌', '铁', '不饱和脂肪酸'],
        effects: ['滋养头发', '抗衰老', '补肾益精'],
        zombieEffect: 'hair',
        buffText: '+发量 UP!',
        color: '#212121',
        description: '乌黑亮丽的秘密。'
    },
    {
        id: 'tomato',
        name: '番茄',
        icon: `<svg viewBox="0 0 100 100" class="veg-svg">
                <circle cx="50" cy="55" r="35" fill="#F44336" stroke="#B71C1C" stroke-width="3"/>
                <path d="M50 20 L35 30 L45 35 L50 55 L55 35 L65 30 Z" fill="#4CAF50" stroke="#1B5E20" stroke-width="2"/>
                <g class="veg-face">
                    <circle cx="35" cy="50" r="7" fill="white"/>
                    <circle cx="35" cy="50" r="3" fill="black"/>
                    <circle cx="65" cy="50" r="7" fill="white"/>
                    <circle cx="65" cy="50" r="3" fill="black"/>
                    <path d="M40 70 Q50 75 60 70" stroke="#B71C1C" stroke-width="2" fill="none"/>
                    <circle cx="30" cy="65" r="5" fill="#FFCDD2" opacity="0.6"/>
                    <circle cx="70" cy="65" r="5" fill="#FFCDD2" opacity="0.6"/>
                </g>
               </svg>`,
        label: '美颜果实',
        nutrition: ['番茄红素', '维生素C', '钾'],
        effects: ['抗氧化', '美白肌肤', '保护心血管'],
        zombieEffect: 'skin',
        buffText: '+颜值 UP!',
        color: '#F44336',
        description: '酸甜可口，美容养颜。'
    }
];
