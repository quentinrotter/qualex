// This file manages the main menu, including navigation and options.

class Menu {
    constructor() {
        this.menuItems = ['Start Game', 'Vehicle Selection', 'Map Selection', 'Garage', 'Settings', 'Exit'];
        this.selectedItem = 0;
        this.isActive = true;
        this.init();
    }

    init() {
        this.render();
        this.bindEvents();
    }

    render() {
        const menuContainer = document.createElement('div');
        menuContainer.className = 'menu-container';

        this.menuItems.forEach((item, index) => {
            const menuItem = document.createElement('div');
            menuItem.className = 'menu-item';
            menuItem.textContent = item;
            menuItem.classList.toggle('selected', index === this.selectedItem);
            menuContainer.appendChild(menuItem);
        });

        document.body.appendChild(menuContainer);
        this.menuContainer = menuContainer;
    }

    bindEvents() {
        window.addEventListener('keydown', (event) => {
            if (!this.isActive) return;

            if (event.key === 'ArrowDown') {
                this.selectedItem = (this.selectedItem + 1) % this.menuItems.length;
                this.updateSelection();
            } else if (event.key === 'ArrowUp') {
                this.selectedItem = (this.selectedItem - 1 + this.menuItems.length) % this.menuItems.length;
                this.updateSelection();
            } else if (event.key === 'Enter') {
                this.selectItem();
            }
        });
    }

    updateSelection() {
        const menuItems = this.menuContainer.getElementsByClassName('menu-item');
        Array.from(menuItems).forEach((item, index) => {
            item.classList.toggle('selected', index === this.selectedItem);
        });
    }

    selectItem() {
        switch (this.selectedItem) {
            case 0:
                this.startGame();
                break;
            case 1:
                this.openVehicleSelection();
                break;
            case 2:
                this.openMapSelection();
                break;
            case 3:
                this.openGarage();
                break;
            case 4:
                this.openSettings();
                break;
            case 5:
                this.exitGame();
                break;
        }
    }

    startGame() {
        console.log('Starting game...');
        // Logic to start the game
    }

    openVehicleSelection() {
        console.log('Opening vehicle selection...');
        // Logic to open vehicle selection
    }

    openMapSelection() {
        console.log('Opening map selection...');
        // Logic to open map selection
    }

    openGarage() {
        console.log('Opening garage...');
        // Logic to open garage
    }

    openSettings() {
        console.log('Opening settings...');
        // Logic to open settings
    }

    exitGame() {
        console.log('Exiting game...');
        // Logic to exit the game
    }
}

// Initialize the menu when the script loads
const mainMenu = new Menu();