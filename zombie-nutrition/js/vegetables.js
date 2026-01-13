const vegetables = [
    {
        id: 'spinach',
        name: '菠菜',
        icon: '🥬', // Using emoji for simplicity as placeholder, can be replaced by CSS/SVG later if needed but prompt says "icon"
        label: '补血圣品',
        nutrition: ['铁', '叶酸', '维生素K', '维生素C'],
        effects: ['促进造血', '预防贫血', '增强免疫力'],
        zombieEffect: 'face-color', // Internal key for effect type
        buffText: '+造血能力 UP!',
        color: '#4CAF50',
        description: '大力水手最爱的食物，含有丰富的铁质。'
    },
    {
        id: 'carrot',
        name: '胡萝卜',
        icon: '🥕',
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
        icon: '🥦',
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
        icon: '🥛',
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
        icon: '🌑', // Approximation
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
        icon: '🍅',
        label: '美颜果实',
        nutrition: ['番茄红素', '维生素C', '钾'],
        effects: ['抗氧化', '美白肌肤', '保护心血管'],
        zombieEffect: 'skin',
        buffText: '+颜值 UP!',
        color: '#F44336',
        description: '酸甜可口，美容养颜。'
    }
];
