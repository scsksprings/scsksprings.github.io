document.addEventListener('DOMContentLoaded', () => {
    const zombie = new Zombie();
    const grid = document.getElementById('vegetableGrid');
    const infoPanel = document.getElementById('infoPanel');
    const closePanelBtn = document.getElementById('closePanel');
    const nutritionList = document.getElementById('nutritionList');
    const resetBtn = document.getElementById('resetBtn');
    const feedAllBtn = document.getElementById('feedAllBtn');

    // State for nutrition tracking
    let consumedNutrition = new Set();

    // Initialize Vegetable Grid
    vegetables.forEach(veg => {
        const card = document.createElement('div');
        card.className = 'veg-card pop-in';
        card.innerHTML = `
            <div class="veg-icon">${veg.icon}</div>
            <div class="veg-name">${veg.name}</div>
            <span class="veg-label">${veg.label}</span>
        `;
        
        card.addEventListener('click', (e) => handleVegetableClick(e, veg));
        grid.appendChild(card);
    });

    // Event Listeners
    closePanelBtn.addEventListener('click', () => {
        infoPanel.classList.add('hidden');
    });

    resetBtn.addEventListener('click', () => {
        zombie.reset();
        consumedNutrition.clear();
        updateNutritionPanel();
    });

    feedAllBtn.addEventListener('click', () => {
        // Feed all vegetables with a delay between them
        vegetables.forEach((veg, index) => {
            setTimeout(() => {
                // Simulate click or just trigger effects
                // Finding the card to trigger animation from it would be cool, but simple direct feed is okay
                // Let's try to find the card element for animation origin
                const cards = document.querySelectorAll('.veg-card');
                const targetCard = cards[index];
                
                if (targetCard) {
                    // Create a synthetic click event or extract logic
                    triggerFeedAnimation(targetCard, veg, false); // false = don't show panel
                }
            }, index * 800); // 800ms delay between each
        });
    });

    function handleVegetableClick(event, vegData) {
        triggerFeedAnimation(event.currentTarget, vegData, true);
    }

    function triggerFeedAnimation(startElement, vegData, showPanel) {
        const rect = startElement.getBoundingClientRect();
        const startX = rect.left + rect.width / 2;
        const startY = rect.top + rect.height / 2;

        // Create flying element
        const flyer = document.createElement('div');
        flyer.innerHTML = vegData.icon; // Use innerHTML for SVG
        flyer.className = 'flying-veg';
        flyer.style.width = '60px'; // Set explicit size for flyer
        flyer.style.height = '60px';
        flyer.style.left = `${startX}px`;
        flyer.style.top = `${startY}px`;
        document.body.appendChild(flyer);

        // Calculate target (Zombie mouth)
        const mouthRect = document.querySelector('.z-mouth').getBoundingClientRect();
        const targetX = mouthRect.left + mouthRect.width / 2;
        const targetY = mouthRect.top + mouthRect.height / 2;

        // Force reflow
        flyer.offsetHeight;

        // Animate
        flyer.style.left = `${targetX}px`;
        flyer.style.top = `${targetY}px`;
        flyer.style.transform = 'scale(0.5)';
        flyer.style.opacity = '0';

        // When animation ends
        setTimeout(() => {
            flyer.remove();
            
            // Zombie eats
            zombie.eat(() => {
                // After eating:
                // 1. Transform Zombie
                zombie.applyEffect(vegData.zombieEffect);
                
                // 2. Show Buff Text
                zombie.showBuff(vegData.buffText);

                // 3. Update Nutrition
                addNutrition(vegData.nutrition);

                // 4. Show Info Panel (only if requested)
                if (showPanel) {
                    showInfoPanel(vegData);
                }
            });
        }, 1000); // Matches CSS transition duration
    }

    function addNutrition(nutritionArray) {
        let addedNew = false;
        nutritionArray.forEach(n => {
            if (!consumedNutrition.has(n)) {
                consumedNutrition.add(n);
                addedNew = true;
            }
        });
        
        if (addedNew) {
            updateNutritionPanel();
        }
    }

    function updateNutritionPanel() {
        if (consumedNutrition.size === 0) {
            nutritionList.innerHTML = '<span class="empty-msg">还没吃东西呢...</span>';
            return;
        }

        nutritionList.innerHTML = '';
        consumedNutrition.forEach(n => {
            const tag = document.createElement('span');
            tag.className = 'nutri-tag';
            tag.textContent = n;
            nutritionList.appendChild(tag);
        });
    }

    function showInfoPanel(veg) {
        // Populate Data
        document.getElementById('infoName').textContent = veg.name;
        document.getElementById('infoImg').innerHTML = veg.icon; // Use innerHTML
        document.getElementById('infoTags').innerHTML = `<span class="veg-label">${veg.label}</span>`;
        document.getElementById('infoDesc').textContent = veg.description;

        // Lists
        const nutritionList = document.getElementById('infoNutrition');
        nutritionList.innerHTML = veg.nutrition.map(n => `<li>${n}</li>`).join('');

        const effectsList = document.getElementById('infoEffects');
        effectsList.innerHTML = veg.effects.map(e => `<li>${e}</li>`).join('');

        // Show
        infoPanel.classList.remove('hidden');
    }
});
