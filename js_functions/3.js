function max4(a, b, c, d) {
    // Vergleiche a und b
    let max = a > b ? a : b;

    // Vergleiche max mit c und d
    max = max > c ? max : c;
    max = max > d ? max : d;

    return max;
}

// Beispiel
const zahl1 = 10;
const zahl2 = 25;
const zahl3 = 15;
const zahl4 = 40;

const größteZahl = max4(zahl1, zahl2, zahl3, zahl4);

console.log(`Die größte Zahl ist: ${größteZahl}`);





