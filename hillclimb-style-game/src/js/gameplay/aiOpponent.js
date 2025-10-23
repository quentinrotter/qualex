// This file manages AI opponents, controlling their behavior and interactions during races.

class AIOpponent {
    constructor(vehicle, startPosition) {
        this.vehicle = vehicle;
        this.position = startPosition;
        this.speed = 0;
        this.acceleration = 0.1;
        this.deceleration = 0.05;
        this.maxSpeed = vehicle.maxSpeed;
        this.isActive = true;
    }

    update(terrain) {
        if (this.isActive) {
            this.handleMovement(terrain);
            this.checkBoundaries(terrain);
        }
    }

    handleMovement(terrain) {
        // Simple AI logic to accelerate and decelerate based on terrain
        const terrainAngle = terrain.getAngleAt(this.position.x);
        
        if (terrainAngle < 0) {
            this.speed = Math.max(this.speed - this.deceleration, 0);
        } else {
            this.speed = Math.min(this.speed + this.acceleration, this.maxSpeed);
        }

        this.position.x += this.speed * Math.cos(terrainAngle);
        this.position.y += this.speed * Math.sin(terrainAngle);
    }

    checkBoundaries(terrain) {
        // Check if the AI opponent is out of bounds and reset if necessary
        if (this.position.y > terrain.getHeightAt(this.position.x)) {
            this.position.y = terrain.getHeightAt(this.position.x);
            this.speed = 0; // Stop the vehicle if it goes out of bounds
        }
    }

    reset(startPosition) {
        this.position = startPosition;
        this.speed = 0;
        this.isActive = true;
    }

    deactivate() {
        this.isActive = false;
    }
}

export default AIOpponent;