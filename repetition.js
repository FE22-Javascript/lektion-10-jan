let plants = [{
        name: 'Coleus',
        id: 1,
        sun: 5,
        water: 4,
        canEat: false,
        colors: ['green', 'pink', 'yellow']
    },
    {
        name: 'Cactus',
        id: 2,
        sun: 5,
        water: 1,
        canEat: false,
        colors: ['green']
    },
    {
        name: 'Aloe Vera',
        id: 3,
        sun: 5,
        water: 2,
        canEat: true,
        colors: ['green']
    }
];

plants.forEach(plant => {
    console.log(plant.name);
    let plantColors = plant.colors;

    // logga en färg i taget på varje planta
    plantColors.forEach(plantColor => {
        console.log(plantColor);
    });
});

// använda findIndex för att få ut plantan med namnet cactus

let index = plants.findIndex(plant => plant.name === "Cactus");
console.log(plants[index]);

// hur findIndex ser ut i bakgrunden:

// vi har en lista
// där vill vi matcha namn mot propertyn name i varje objekt i listan

function checkNameInList(array, propToCheck, value) {

    let index = -1;

    for (let i = 0; i < array.length; i++) {
        if (array[i][propToCheck] === value) {
            // returnera index på match om match finns
            index = i;
            break;
        } else {
            index = -1;
        }
    }
    return index;
};

let indexOfCactus = checkNameInList(plants, "name", "Aloe Vera");
console.log(indexOfCactus);