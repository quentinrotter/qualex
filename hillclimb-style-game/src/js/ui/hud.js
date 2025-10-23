// This file manages the heads-up display, showing current speed, fuel level, and other stats during gameplay.

class HUD {
    constructor() {
        this.speed = 0;
        this.fuel = 100;
        this.score = 0;
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = 800; // Set to your game's width
        this.canvas.height = 600; // Set to your game's height
        document.body.appendChild(this.canvas);
    }

    update(speed, fuel, score) {
        this.speed = speed;
        this.fuel = fuel;
        this.score = score;
        this.render();
    }

    render() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.fillStyle = 'rgba(0, 0, 0, 0.5)';
        this.context.fillRect(0, 0, this.canvas.width, 50);

        this.context.fillStyle = 'white';
        this.context.font = '20px Arial';
        this.context.fillText(`Speed: ${this.speed.toFixed(1)} km/h`, 20, 30);
        this.context.fillText(`Fuel: ${this.fuel.toFixed(1)} L`, 200, 30);
        this.context.fillText(`Score: ${this.score}`, 400, 30);
    }

    reset() {
        this.speed = 0;
        this.fuel = 100;
        this.score = 0;
        this.render();
    }
}

const hud = new HUD();
export default hud;