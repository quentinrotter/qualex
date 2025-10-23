// This file handles the rendering of game objects, including vehicles, terrain, and UI elements.

class Renderer {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.context = context;
        this.width = canvas.width;
        this.height = canvas.height;
    }

    clear() {
        this.context.clearRect(0, 0, this.width, this.height);
    }

    drawBackground(backgroundImage) {
        this.context.drawImage(backgroundImage, 0, 0, this.width, this.height);
    }

    drawVehicle(vehicle) {
        this.context.save();
        this.context.translate(vehicle.x, vehicle.y);
        this.context.rotate(vehicle.angle);
        this.context.drawImage(vehicle.image, -vehicle.width / 2, -vehicle.height / 2, vehicle.width, vehicle.height);
        this.context.restore();
    }

    drawTerrain(terrain) {
        this.context.beginPath();
        this.context.moveTo(0, this.height);
        terrain.forEach(point => {
            this.context.lineTo(point.x, point.y);
        });
        this.context.lineTo(this.width, this.height);
        this.context.closePath();
        this.context.fillStyle = '#8B4513'; // Brown color for terrain
        this.context.fill();
    }

    drawHUD(hudData) {
        this.context.fillStyle = 'white';
        this.context.font = '20px Arial';
        this.context.fillText(`Speed: ${hudData.speed}`, 10, 30);
        this.context.fillText(`Fuel: ${hudData.fuel}`, 10, 60);
    }

    drawGameOver() {
        this.context.fillStyle = 'rgba(0, 0, 0, 0.5)';
        this.context.fillRect(0, 0, this.width, this.height);
        this.context.fillStyle = 'white';
        this.context.font = '40px Arial';
        this.context.fillText('Game Over', this.width / 2 - 100, this.height / 2);
    }
}

export default Renderer;