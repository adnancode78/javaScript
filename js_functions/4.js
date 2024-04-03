// Importieren des readline-Moduls
const readline = require('readline');

// Erstellen einer readline-Schnittstelle
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Funktion zum Abfragen des Benutzers
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

// Schließen der readline-Schnittstelle beim Beenden des Programms
rl.on('close', () => process.exit(0));

// Hauptfunktion
async function main() {
    // Abrufen der Eingabe des Benutzers
    const zahl1 = parseInt(await prompt('Geben Sie die erste Zahl ein: '));
    const zahl2 = parseInt(await prompt('Geben Sie die zweite Zahl ein: '));
    const zahl3 = parseInt(await prompt('Geben Sie die dritte Zahl ein: '));

    // Berechnen des Mittelwerts
    const mittelwert = (zahl1 + zahl2 + zahl3) / 3;

    // Ausgabe des Mittelwerts
    console.log(`Der Mittelwert von ${zahl1}, ${zahl2} und ${zahl3} ist ${mittelwert}.`);

    // Schließen der readline-Schnittstelle
    rl.close();
}

// Aufrufen der Hauptfunktion
main();