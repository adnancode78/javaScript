const getRandomNumber= (min, max, roundToInteger) => {
    return answer = roundToInteger ? Math.random() * (max - min ) + min : Math.floor(Math.random() * (max - min ) + min);
}

console.log(getRandomNumber(2, 5, false));
console.log(getRandomNumber(2, 5, true));


