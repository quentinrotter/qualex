// vehicleController.js
class VehicleController {
    constructor(vehicle) {
        this.vehicle = vehicle;
        this.speed = 0;
        this.position = { x: 0, y: 0 };
        this.fuel = vehicle.fuelCapacity;
        this.isAccelerating = false;
        this.isBraking = false;
    }

    update(deltaTime) {
        this.handleInput();
        this.applyPhysics(deltaTime);
        this.checkFuel();
    }

    handleInput() {
        if (this.isAccelerating) {
            this.speed += this.vehicle.acceleration;
        }
        if (this.isBraking) {
            this.speed -= this.vehicle.braking;
        }
        this.speed = Math.max(0, this.speed); // Prevent negative speed
    }

    applyPhysics(deltaTime) {
        this.position.x += this.speed * deltaTime;
        this.position.y = this.calculateTerrainHeight(this.position.x);
    }

    calculateTerrainHeight(x) {
        // Placeholder for terrain height calculation
        return Math.sin(x * 0.1) * 50; // Example terrain function
    }

    checkFuel() {
        if (this.fuel > 0) {
            this.fuel -= this.speed * 0.01; // Fuel consumption based on speed
        } else {
            this.speed = 0; // Stop the vehicle if out of fuel
        }
    }

    accelerate() {
        this.isAccelerating = true;
    }

    brake() {
        this.isBraking = true;
    }

    releaseAccelerate() {
        this.isAccelerating = false;
    }

    releaseBrake() {
        this.isBraking = false;
    }

    refuel(amount) {
        this.fuel = Math.min(this.fuel + amount, this.vehicle.fuelCapacity);
    }

    reset() {
        this.speed = 0;
        this.position = { x: 0, y: 0 };
        this.fuel = this.vehicle.fuelCapacity;
    }
}

export default VehicleController;