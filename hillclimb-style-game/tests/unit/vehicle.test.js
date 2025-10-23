// vehicle.test.js

import { Vehicle } from '../../src/js/gameplay/vehicleController';
import vehiclesData from '../../src/js/data/vehicles.json';

describe('Vehicle Class', () => {
    let vehicle;

    beforeEach(() => {
        vehicle = new Vehicle(vehiclesData[0]); // Initialize with the first vehicle in the data
    });

    test('should initialize with correct properties', () => {
        expect(vehicle.name).toBe(vehiclesData[0].name);
        expect(vehicle.speed).toBe(vehiclesData[0].speed);
        expect(vehicle.fuel).toBe(vehiclesData[0].fuel);
        expect(vehicle.position).toEqual({ x: 0, y: 0 });
    });

    test('should accelerate correctly', () => {
        vehicle.accelerate();
        expect(vehicle.speed).toBeGreaterThan(vehiclesData[0].speed);
    });

    test('should brake correctly', () => {
        vehicle.accelerate();
        vehicle.brake();
        expect(vehicle.speed).toBeLessThan(vehiclesData[0].speed);
    });

    test('should consume fuel when accelerating', () => {
        const initialFuel = vehicle.fuel;
        vehicle.accelerate();
        expect(vehicle.fuel).toBeLessThan(initialFuel);
    });

    test('should not accelerate beyond max speed', () => {
        vehicle.speed = vehiclesData[0].maxSpeed; // Set speed to max
        vehicle.accelerate();
        expect(vehicle.speed).toBe(vehiclesData[0].maxSpeed);
    });

    test('should reset position after a race', () => {
        vehicle.position = { x: 100, y: 50 };
        vehicle.reset();
        expect(vehicle.position).toEqual({ x: 0, y: 0 });
    });
});