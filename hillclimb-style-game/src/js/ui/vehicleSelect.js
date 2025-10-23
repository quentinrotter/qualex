// vehicleSelect.js

class VehicleSelect {
    constructor(vehicles, onSelect) {
        this.vehicles = vehicles;
        this.onSelect = onSelect;
        this.selectedVehicleIndex = 0;
        this.createUI();
    }

    createUI() {
        this.container = document.createElement('div');
        this.container.className = 'vehicle-select-container';

        this.title = document.createElement('h2');
        this.title.innerText = 'Select Your Vehicle';
        this.container.appendChild(this.title);

        this.vehicleList = document.createElement('div');
        this.vehicleList.className = 'vehicle-list';
        this.container.appendChild(this.vehicleList);

        this.vehicles.forEach((vehicle, index) => {
            const vehicleItem = document.createElement('div');
            vehicleItem.className = 'vehicle-item';
            vehicleItem.innerText = vehicle.name;
            vehicleItem.onclick = () => this.selectVehicle(index);
            this.vehicleList.appendChild(vehicleItem);
        });

        this.selectButton = document.createElement('button');
        this.selectButton.innerText = 'Select Vehicle';
        this.selectButton.onclick = () => this.confirmSelection();
        this.container.appendChild(this.selectButton);

        document.body.appendChild(this.container);
        this.updateSelection();
    }

    selectVehicle(index) {
        this.selectedVehicleIndex = index;
        this.updateSelection();
    }

    updateSelection() {
        const vehicleItems = this.vehicleList.getElementsByClassName('vehicle-item');
        for (let i = 0; i < vehicleItems.length; i++) {
            vehicleItems[i].classList.toggle('selected', i === this.selectedVehicleIndex);
        }
    }

    confirmSelection() {
        const selectedVehicle = this.vehicles[this.selectedVehicleIndex];
        this.onSelect(selectedVehicle);
        this.container.remove();
    }
}

// Usage example
// Assuming vehicles data is available and onSelect function is defined
// const vehicleSelect = new VehicleSelect(vehicles, (selectedVehicle) => {
//     console.log('Selected Vehicle:', selectedVehicle);
// });