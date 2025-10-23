// This file handles user input, including keyboard controls for acceleration and braking.

class InputHandler {
    constructor() {
        this.keys = {
            up: false,
            down: false,
            left: false,
            right: false,
        };

        this.bindEvents();
    }

    bindEvents() {
        window.addEventListener('keydown', (event) => {
            this.handleKeyDown(event);
        });

        window.addEventListener('keyup', (event) => {
            this.handleKeyUp(event);
        });
    }

    handleKeyDown(event) {
        switch (event.code) {
            case 'ArrowUp':
                this.keys.up = true;
                break;
            case 'ArrowDown':
                this.keys.down = true;
                break;
            case 'ArrowLeft':
                this.keys.left = true;
                break;
            case 'ArrowRight':
                this.keys.right = true;
                break;
        }
    }

    handleKeyUp(event) {
        switch (event.code) {
            case 'ArrowUp':
                this.keys.up = false;
                break;
            case 'ArrowDown':
                this.keys.down = false;
                break;
            case 'ArrowLeft':
                this.keys.left = false;
                break;
            case 'ArrowRight':
                this.keys.right = false;
                break;
        }
    }

    isAccelerating() {
        return this.keys.up;
    }

    isBraking() {
        return this.keys.down;
    }

    isTurningLeft() {
        return this.keys.left;
    }

    isTurningRight() {
        return this.keys.right;
    }
}

const inputHandler = new InputHandler();