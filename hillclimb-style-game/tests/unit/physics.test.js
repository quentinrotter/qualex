import { calculatePhysics, applyGravity, checkCollision } from '../../src/js/physics';

describe('Physics Engine', () => {
    let vehicle;

    beforeEach(() => {
        vehicle = {
            position: { x: 0, y: 0 },
            velocity: { x: 0, y: 0 },
            mass: 1000,
            width: 50,
            height: 20,
            isGrounded: false,
        };
    });

    test('should apply gravity correctly', () => {
        const initialY = vehicle.position.y;
        applyGravity(vehicle);
        expect(vehicle.position.y).toBeGreaterThan(initialY);
    });

    test('should calculate physics correctly for a flat surface', () => {
        vehicle.velocity.x = 10; // Simulate forward movement
        calculatePhysics(vehicle);
        expect(vehicle.position.x).toBeGreaterThan(0);
        expect(vehicle.velocity.y).toBe(0); // No vertical movement on flat surface
    });

    test('should detect collision with ground', () => {
        vehicle.position.y = 100; // Set vehicle above ground
        vehicle.isGrounded = false;
        checkCollision(vehicle, { y: 100, height: 10 }); // Simulate ground below
        expect(vehicle.isGrounded).toBe(true);
    });

    test('should not collide when above ground', () => {
        vehicle.position.y = 50; // Set vehicle above ground
        vehicle.isGrounded = false;
        checkCollision(vehicle, { y: 100, height: 10 }); // Simulate ground below
        expect(vehicle.isGrounded).toBe(false);
    });
});