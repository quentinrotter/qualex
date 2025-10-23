// This file manages the upgrade shop interface, where players can purchase upgrades for their vehicles.

class Garage {
    constructor() {
        this.upgrades = [];
        this.selectedVehicle = null;
        this.loadUpgrades();
    }

    loadUpgrades() {
        fetch('../data/tuningParts.json')
            .then(response => response.json())
            .then(data => {
                this.upgrades = data;
                this.renderUpgrades();
            });
    }

    setSelectedVehicle(vehicle) {
        this.selectedVehicle = vehicle;
        this.renderUpgrades();
    }

    renderUpgrades() {
        const upgradeContainer = document.getElementById('upgrade-container');
        upgradeContainer.innerHTML = '';

        if (!this.selectedVehicle) {
            upgradeContainer.innerHTML = '<p>Please select a vehicle to view upgrades.</p>';
            return;
        }

        this.upgrades.forEach(upgrade => {
            const upgradeElement = document.createElement('div');
            upgradeElement.className = 'upgrade-item';
            upgradeElement.innerHTML = `
                <h3>${upgrade.name}</h3>
                <p>Cost: ${upgrade.cost}</p>
                <button onclick="garage.purchaseUpgrade('${upgrade.id}')">Purchase</button>
            `;
            upgradeContainer.appendChild(upgradeElement);
        });
    }

    purchaseUpgrade(upgradeId) {
        if (!this.selectedVehicle) {
            alert('Please select a vehicle first.');
            return;
        }

        const upgrade = this.upgrades.find(up => up.id === upgradeId);
        if (upgrade && this.selectedVehicle.coins >= upgrade.cost) {
            this.selectedVehicle.coins -= upgrade.cost;
            this.selectedVehicle.applyUpgrade(upgrade);
            alert(`Purchased ${upgrade.name} for ${this.selectedVehicle.name}.`);
            this.renderUpgrades();
        } else {
            alert('Not enough coins or upgrade not found.');
        }
    }
}

const garage = new Garage();