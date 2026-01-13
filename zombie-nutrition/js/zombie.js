class Zombie {
    constructor() {
        this.element = document.getElementById('zombie');
        this.buffContainer = document.getElementById('buffContainer');
        this.mouth = this.element.querySelector('.z-mouth');
    }

    eat(callback) {
        // Add chewing class
        this.element.classList.add('eating');
        
        // Remove after animation (simulate chewing time)
        setTimeout(() => {
            this.element.classList.remove('eating');
            if (callback) callback();
        }, 1500);
    }

    applyEffect(effectType) {
        // Map effect types to CSS classes on the zombie element
        // Effects are cumulative in this simple version
        switch (effectType) {
            case 'face-color':
                this.element.classList.add('healthy-skin');
                break;
            case 'eyes':
                this.element.classList.add('healthy-eyes');
                break;
            case 'muscles':
                this.element.classList.add('muscular');
                break;
            case 'bones':
                this.element.classList.add('strong-bones');
                break;
            case 'hair':
                this.element.classList.add('full-hair');
                break;
            case 'skin':
                this.element.classList.add('healthy-skin'); // Reusing healthy skin for now, could be distinct
                break;
            default:
                console.log('Unknown effect:', effectType);
        }
        
        // Add a temporary shake/reaction
        this.element.classList.add('shake');
        setTimeout(() => this.element.classList.remove('shake'), 500);
    }

    showBuff(text) {
        const buffEl = document.createElement('div');
        buffEl.className = 'buff-text';
        buffEl.textContent = text;
        this.buffContainer.appendChild(buffEl);

        // Remove element after animation finishes (2s matches CSS)
        setTimeout(() => {
            buffEl.remove();
        }, 2000);
    }
}
