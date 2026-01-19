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
    },
    {
        id: 'cabbage',
        name: '卷心菜',
        icon: `<svg viewBox="0 0 100 100" class="veg-svg">
                <circle cx="50" cy="50" r="40" fill="#C8E6C9" stroke="#388E3C" stroke-width="3"/>
                <path d="M20 50 Q50 20 80 50" stroke="#4CAF50" stroke-width="2" fill="none"/>
                <path d="M20 50 Q50 80 80 50" stroke="#4CAF50" stroke-width="2" fill="none"/>
                <path d="M30 40 Q50 70 70 40" stroke="#4CAF50" stroke-width="2" fill="none"/>
                <g class="veg-face">
                    <circle cx="40" cy="45" r="5" fill="white"/>
                    <circle cx="40" cy="45" r="2" fill="black"/>
                    <circle cx="60" cy="45" r="5" fill="white"/>
                    <circle cx="60" cy="45" r="2" fill="black"/>
                    <path d="M45 60 Q50 65 55 60" stroke="#2E7D32" stroke-width="2" fill="none"/>
                </g>
               </svg>`,
        label: '天然胃菜',
        nutrition: ['维生素U', '膳食纤维', '钾'],
        effects: ['养胃护胃', '助消化', '调节血压'],
        zombieEffect: 'tummy',
        buffText: '+消化力 UP!',
        color: '#C8E6C9',
        description: '富含维生素U，对胃部健康有很大帮助。'
    },
    {
        id: 'cucumber',
        name: '黄瓜',
        icon: `<svg viewBox="0 0 100 100" class="veg-svg">
                <rect x="25" y="15" width="50" height="70" rx="15" fill="#8BC34A" stroke="#33691E" stroke-width="3"/>
                <circle cx="35" cy="25" r="2" fill="#558B2F"/>
                <circle cx="65" cy="30" r="2" fill="#558B2F"/>
                <circle cx="30" cy="70" r="2" fill="#558B2F"/>
                <circle cx="60" cy="75" r="2" fill="#558B2F"/>
                <g class="veg-face">
                    <circle cx="40" cy="45" r="5" fill="white"/>
                    <circle cx="40" cy="45" r="2" fill="black"/>
                    <circle cx="60" cy="45" r="5" fill="white"/>
                    <circle cx="60" cy="45" r="2" fill="black"/>
                    <path d="M45 60 Q50 55 55 60" stroke="#33691E" stroke-width="2" fill="none"/>
                </g>
               </svg>`,
        label: '补水神器',
        nutrition: ['水分', '维生素C', '丙醇二酸'],
        effects: ['清热解毒', '减肥', '美容补水'],
        zombieEffect: 'skin',
        buffText: '+水润度 UP!',
        color: '#8BC34A',
        description: '含水量高达96%，是夏季补水的最佳选择。'
    },
    {
        id: 'eggplant',
        name: '茄子',
        icon: `<svg viewBox="0 0 100 100" class="veg-svg">
                <path d="M30 30 Q50 10 70 30 Q85 50 75 80 Q50 95 25 80 Q15 50 30 30" fill="#7B1FA2" stroke="#4A148C" stroke-width="3"/>
                <path d="M25 25 L35 15 L50 10 L65 15 L75 25 L50 35 Z" fill="#4CAF50" stroke="#1B5E20" stroke-width="2"/>
                <g class="veg-face">
                    <circle cx="40" cy="45" r="5" fill="white"/>
                    <circle cx="40" cy="45" r="2" fill="black"/>
                    <circle cx="60" cy="45" r="5" fill="white"/>
                    <circle cx="60" cy="45" r="2" fill="black"/>
                    <path d="M45 60 Q50 65 55 60" stroke="white" stroke-width="2" fill="none"/>
                </g>
               </svg>`,
        label: '紫色奇迹',
        nutrition: ['花青素', '维生素P', '维生素E'],
        effects: ['抗衰老', '保护血管', '降低胆固醇'],
        zombieEffect: 'face-color',
        buffText: '+气色 UP!',
        color: '#7B1FA2',
        description: '皮中的花青素是天然的抗氧化剂。'
    },
    {
        id: 'wintermelon',
        name: '冬瓜',
        icon: `<svg viewBox="0 0 100 100" class="veg-svg">
                <ellipse cx="50" cy="50" rx="35" ry="45" fill="#E0F7FA" stroke="#006064" stroke-width="3"/>
                <path d="M30 20 Q50 15 70 20" stroke="#80DEEA" stroke-width="2" fill="none"/>
                <g class="veg-face">
                    <circle cx="40" cy="45" r="5" fill="white"/>
                    <circle cx="40" cy="45" r="2" fill="black"/>
                    <circle cx="60" cy="45" r="5" fill="white"/>
                    <circle cx="60" cy="45" r="2" fill="black"/>
                    <path d="M45 60 Q50 65 55 60" stroke="#006064" stroke-width="2" fill="none"/>
                </g>
               </svg>`,
        label: '消肿利器',
        nutrition: ['丙醇二酸', '钾', '维生素C'],
        effects: ['利尿消肿', '清热解暑', '减肥降脂'],
        zombieEffect: 'tummy',
        buffText: '+轻盈度 UP!',
        color: '#E0F7FA',
        description: '不含脂肪，热量极低，减肥人士的理想食材。'
    }
];
