import { Selector } from 'testcafe';

fixture `Hill Climb Racing UI Tests`
    .page `http://localhost:3000`; // Adjust the URL to your local server

test('Main Menu is displayed', async t => {
    const menu = Selector('#main-menu');
    await t
        .expect(menu.visible).ok('Main menu should be visible');
});

test('Vehicle Selection opens correctly', async t => {
    const vehicleSelectButton = Selector('#vehicle-select-button');
    const vehicleSelectMenu = Selector('#vehicle-select');

    await t
        .click(vehicleSelectButton)
        .expect(vehicleSelectMenu.visible).ok('Vehicle selection menu should be visible');
});

test('Garage opens correctly', async t => {
    const garageButton = Selector('#garage-button');
    const garageMenu = Selector('#garage');

    await t
        .click(garageButton)
        .expect(garageMenu.visible).ok('Garage menu should be visible');
});

test('Map Selection opens correctly', async t => {
    const mapSelectButton = Selector('#map-select-button');
    const mapSelectMenu = Selector('#map-select');

    await t
        .click(mapSelectButton)
        .expect(mapSelectMenu.visible).ok('Map selection menu should be visible');
});

test('HUD displays correct information during gameplay', async t => {
    const startGameButton = Selector('#start-game-button');
    const speedDisplay = Selector('#speed-display');
    const fuelDisplay = Selector('#fuel-display');

    await t
        .click(startGameButton)
        .expect(speedDisplay.visible).ok('Speed display should be visible')
        .expect(fuelDisplay.visible).ok('Fuel display should be visible');
});