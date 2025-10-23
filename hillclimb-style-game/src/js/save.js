// This file handles saving and loading game progress, including player stats and upgrades.

class GameSave {
    constructor() {
        this.saveKey = 'hillClimbRacingSave';
    }

    saveGame(data) {
        const saveData = JSON.stringify(data);
        localStorage.setItem(this.saveKey, saveData);
    }

    loadGame() {
        const saveData = localStorage.getItem(this.saveKey);
        if (saveData) {
            return JSON.parse(saveData);
        }
        return null;
    }

    clearSave() {
        localStorage.removeItem(this.saveKey);
    }
}

const gameSave = new GameSave();
export default gameSave;