// This file contains the core game engine logic, including the game loop and rendering process.

class GameEngine {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.context = this.canvas.getContext('2d');
        this.lastTime = 0;
        this.isRunning = false;
        this.gameObjects = [];
        this.deltaTime = 0;
    }

    start() {
        this.isRunning = true;
        requestAnimationFrame(this.gameLoop.bind(this));
    }

    stop() {
        this.isRunning = false;
    }

    gameLoop(timestamp) {
        if (!this.isRunning) return;

        this.deltaTime = timestamp - this.lastTime;
        this.lastTime = timestamp;

        this.update();
        this.render();

        requestAnimationFrame(this.gameLoop.bind(this));
    }

    update() {
        // Update game objects
        for (let obj of this.gameObjects) {
            if (obj.update) {
                obj.update(this.deltaTime);
            }
        }
    }

    render() {
        // Clear the canvas
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Render game objects
        for (let obj of this.gameObjects) {
            if (obj.render) {
                obj.render(this.context);
            }
        }
    }

    addGameObject(gameObject) {
        this.gameObjects.push(gameObject);
    }

    removeGameObject(gameObject) {
        const index = this.gameObjects.indexOf(gameObject);
        if (index > -1) {
            this.gameObjects.splice(index, 1);
        }
    }
}

const gameEngine = new GameEngine();
gameEngine.start();