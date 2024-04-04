const favoriteMotorcycle = {
    // Use descriptive property names and different data types
    brand: "Ducati",
    model: "Panigale V4",
    engineCapacity: 1103, // in cubic centimeters (number)
    horsepower: 214, // (number)
    color: "Red", // string
    isElectric: false, // boolean
    year: 2024, // number (year)
    interestingFact: "The Panigale V4 has a counter-rotating crankshaft that reduces wheelie tendencies." // string
};

const message = `My favorite motorcycle is the ${favoriteMotorcycle.brand} ${favoriteMotorcycle.model}. 
It has a powerful ${favoriteMotorcycle.engineCapacity}cc engine that produces ${favoriteMotorcycle.horsepower} horsepower. 
The ${favoriteMotorcycle.color} beauty is not electric powered (isElectric: ${favoriteMotorcycle.isElectric}). 
Did you know? ${favoriteMotorcycle.interestingFact}`;

console.log(message);
