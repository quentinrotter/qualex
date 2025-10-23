// This file implements the physics engine, managing vehicle movement, collisions, and terrain interactions.

class Physics {
    constructor(gravity, friction) {
        this.gravity = gravity;
        this.friction = friction;
    }

    applyGravity(vehicle) {
        vehicle.velocity.y += this.gravity;
    }

    applyFriction(vehicle) {
        vehicle.velocity.x *= this.friction;
    }

    updatePosition(vehicle) {
        vehicle.position.x += vehicle.velocity.x;
        vehicle.position.y += vehicle.velocity.y;

        // Prevent the vehicle from going below the ground level
        if (vehicle.position.y > groundLevel) {
            vehicle.position.y = groundLevel;
            vehicle.velocity.y = 0; // Reset vertical velocity on ground contact
        }
    }

    checkCollision(vehicle, terrain) {
        // Simple collision detection with terrain
        if (vehicle.position.y + vehicle.height > terrain.heightAt(vehicle.position.x)) {
            vehicle.position.y = terrain.heightAt(vehicle.position.x) - vehicle.height;
            vehicle.velocity.y = 0; // Reset vertical velocity on collision
        }
    }
}

const groundLevel = 400; // Example ground level, adjust as needed

export { Physics };