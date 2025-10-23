// This file manages audio playback for sound effects and background music.

class AudioManager {
    constructor() {
        this.sounds = {};
        this.music = null;
    }

    loadSound(name, path) {
        const audio = new Audio(path);
        this.sounds[name] = audio;
    }

    playSound(name) {
        if (this.sounds[name]) {
            this.sounds[name].currentTime = 0; // Restart sound if already playing
            this.sounds[name].play();
        }
    }

    stopSound(name) {
        if (this.sounds[name]) {
            this.sounds[name].pause();
            this.sounds[name].currentTime = 0; // Reset to start
        }
    }

    loadMusic(path) {
        this.music = new Audio(path);
        this.music.loop = true; // Loop the background music
    }

    playMusic() {
        if (this.music) {
            this.music.play();
        }
    }

    stopMusic() {
        if (this.music) {
            this.music.pause();
            this.music.currentTime = 0; // Reset to start
        }
    }

    setVolume(volume) {
        for (let sound in this.sounds) {
            this.sounds[sound].volume = volume;
        }
        if (this.music) {
            this.music.volume = volume;
        }
    }
}

// Example usage
const audioManager = new AudioManager();
audioManager.loadSound('engine', 'assets/audio/engine.mp3');
audioManager.loadSound('jump', 'assets/audio/jump.mp3');
audioManager.loadMusic('assets/audio/background.mp3');

// To play sounds
audioManager.playSound('engine');
audioManager.playMusic();