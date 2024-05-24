// array con tutte le bici
const bikes = [
    { nome: 'Bianchi', peso: 7.2 },
    { nome: 'Trek', peso: 6.8 },
    { nome: 'Cannondale', peso: 7.5 },
    { nome: 'Specialized', peso: 6.9 },
    { nome: 'Pinarello', peso: 7.0 }
];




// controllo di ogni bici presente dentro l'array
const getLightestBike = (bikesArray) => {
    let lightestBike = bikesArray[0];

    for (const bike of bikesArray) {
        if (bike.peso < lightestBike.peso) {
            lightestBike = bike;
        }
    }

    return lightestBike;
};


const { nome, peso } = getLightestBike(bikes);
console.log(`La bici più leggera è ${nome} con un peso di ${peso} kg.`);