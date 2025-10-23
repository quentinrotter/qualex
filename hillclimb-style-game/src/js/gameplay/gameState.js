// This file manages the overall game state, including starting, pausing, and ending the game.

class GameState {
    constructor() {
        this.isRunning = false;
        this.isPaused = false;
        this.score = 0;
        this.level = 1;
        this.fuel = 100;
        this.distanceTraveled = 0;
    }

    startGame() {
        this.isRunning = true;
        this.isPaused = false;
        this.score = 0;
        this.distanceTraveled = 0;
        this.fuel = 100;
        this.level = 1;
        this.updateGame();
    }

    pauseGame() {
        if (this.isRunning) {
            this.isPaused = true;
        }
    }

    resumeGame() {
        if (this.isPaused) {
            this.isPaused = false;
            this.updateGame();
        }
    }

    endGame() {
        this.isRunning = false;
        this.isPaused = false;
        this.saveScore();
        this.resetGame();
    }

    saveScore() {
        // Logic to save the score to local storage or server
    }

    resetGame() {
        this.score = 0;
        this.distanceTraveled = 0;
        this.fuel = 100;
        this.level = 1;
    }

    updateGame() {
        if (this.isRunning && !this.isPaused) {
            // Update game logic, such as distance traveled and fuel consumption
            this.distanceTraveled += 1; // Example increment
            this.fuel -= 0.1; // Example fuel consumption
            if (this.fuel <= 0) {
                this.endGame();
            }
            requestAnimationFrame(() => this.updateGame());
        }
    }
}

const gameState = new GameState();
export default gameState;