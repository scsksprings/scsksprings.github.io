document.addEventListener('DOMContentLoaded', () => {
    const zombie = new Zombie();
    const grid = document.getElementById('vegetableGrid');
    const infoPanel = document.getElementById('infoPanel');
    const closePanelBtn = document.getElementById('closePanel');

    // Initialize Vegetable Grid
    vegetables.forEach(veg => {
        const card = document.createElement('div');
        card.className = 'veg-card pop-in';
        card.innerHTML = `
            <span class="veg-icon">${veg.icon}</span>
            <div class="veg-name">${veg.name}</div>
            <span class="veg-label">${veg.label}</span>
        `;
        
        card.addEventListener('click', (e) => handleVegetableClick(e, veg));
        grid.appendChild(card);
    });

    // Close Panel Handler
    closePanelBtn.addEventListener('click', () => {
        infoPanel.classList.add('hidden');
    });

    function handleVegetableClick(event, vegData) {
        // Prevent multiple clicks during animation? Maybe optional.
        
        const rect = event.currentTarget.getBoundingClientRect();
        const startX = rect.left + rect.width / 2;
        const startY = rect.top + rect.height / 2;

        // Create flying element
        const flyer = document.createElement('div');
        flyer.textContent = vegData.icon;
        flyer.className = 'flying-veg';
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

                // 3. Show Info Panel
                showInfoPanel(vegData);
            });
        }, 1000); // Matches CSS transition duration
    }

    function showInfoPanel(veg) {
        // Populate Data
        document.getElementById('infoName').textContent = veg.name;
        document.getElementById('infoImg').textContent = veg.icon;
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
