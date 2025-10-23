// This file manages the tuning and upgrade system for vehicles, including applying upgrades and calculating effects.

class Tuning {
    constructor(vehicle, tuningData) {
        this.vehicle = vehicle;
        this.tuningData = tuningData;
        this.upgrades = {
            engine: 0,
            suspension: 0,
            tires: 0,
            weight: 0
        };
    }

    applyUpgrade(part) {
        if (this.tuningData[part]) {
            this.upgrades[part] += 1;
            this.updateVehicleStats(part);
        }
    }

    updateVehicleStats(part) {
        const upgradeEffect = this.tuningData[part].effects;
        this.vehicle.speed += upgradeEffect.speed;
        this.vehicle.acceleration += upgradeEffect.acceleration;
        this.vehicle.handling += upgradeEffect.handling;
        this.vehicle.weight -= upgradeEffect.weight;
    }

    getUpgradeCost(part) {
        return this.tuningData[part].cost * (this.upgrades[part] + 1);
    }

    resetUpgrades() {
        this.upgrades = {
            engine: 0,
            suspension: 0,
            tires: 0,
            weight: 0
        };
        this.vehicle.resetStats();
    }
}

export default Tuning;