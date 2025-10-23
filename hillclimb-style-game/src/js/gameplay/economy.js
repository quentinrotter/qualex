// This file handles the in-game economy, including currency management and upgrade costs.

class Economy {
    constructor() {
        this.coins = 0;
        this.upgradeCosts = {};
        this.loadEconomyData();
    }

    loadEconomyData() {
        fetch('/data/balances/economy.json')
            .then(response => response.json())
            .then(data => {
                this.upgradeCosts = data.upgradeCosts;
            })
            .catch(error => console.error('Error loading economy data:', error));
    }

    addCoins(amount) {
        this.coins += amount;
        this.updateUI();
    }

    spendCoins(amount) {
        if (this.coins >= amount) {
            this.coins -= amount;
            this.updateUI();
            return true;
        }
        return false;
    }

    getCoins() {
        return this.coins;
    }

    getUpgradeCost(part) {
        return this.upgradeCosts[part] || 0;
    }

    updateUI() {
        const coinDisplay = document.getElementById('coin-display');
        if (coinDisplay) {
            coinDisplay.innerText = `Coins: ${this.coins}`;
        }
    }
}

const economy = new Economy();