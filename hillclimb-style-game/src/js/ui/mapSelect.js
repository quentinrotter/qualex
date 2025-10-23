// This file handles the map selection interface, allowing players to choose different terrains to race on.

class MapSelect {
    constructor(maps) {
        this.maps = maps;
        this.selectedMapIndex = 0;
        this.mapElements = [];
        this.init();
    }

    init() {
        this.createMapElements();
        this.renderMapSelection();
        this.addEventListeners();
    }

    createMapElements() {
        this.maps.forEach((map, index) => {
            const mapElement = document.createElement('div');
            mapElement.classList.add('map-item');
            mapElement.innerText = map.name;
            mapElement.dataset.index = index;
            this.mapElements.push(mapElement);
        });
    }

    renderMapSelection() {
        const mapContainer = document.getElementById('map-selection-container');
        mapContainer.innerHTML = '';
        this.mapElements.forEach(mapElement => {
            mapContainer.appendChild(mapElement);
        });
        this.highlightSelectedMap();
    }

    highlightSelectedMap() {
        this.mapElements.forEach((mapElement, index) => {
            if (index === this.selectedMapIndex) {
                mapElement.classList.add('selected');
            } else {
                mapElement.classList.remove('selected');
            }
        });
    }

    addEventListeners() {
        this.mapElements.forEach(mapElement => {
            mapElement.addEventListener('click', () => {
                this.selectedMapIndex = parseInt(mapElement.dataset.index);
                this.highlightSelectedMap();
            });
        });

        document.getElementById('confirm-map-button').addEventListener('click', () => {
            this.confirmMapSelection();
        });
    }

    confirmMapSelection() {
        const selectedMap = this.maps[this.selectedMapIndex];
        console.log(`Selected map: ${selectedMap.name}`);
        // Logic to start the game with the selected map
    }
}

// Usage example
fetch('src/js/data/maps.json')
    .then(response => response.json())
    .then(maps => {
        const mapSelect = new MapSelect(maps);
    });