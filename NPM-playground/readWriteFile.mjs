
import { readFile, writeFile } from 'node:fs';
 
// lesen der Datei
readFile('./package.json', 'utf8', (err, data) => {
    // auf Fehler prüfen
    if (err) {
        console.error('Error reading file');
    } else {
        // umwandeln des Strings in ein JS Objekt
        const dataObj = JSON.parse(data);
        // verändern der Daten
        dataObj.private = true;
        // zurück Umwandeln in einen String
        const dataToWrite = JSON.stringify(dataObj, null, 2);
        // (über)schreiben der Datei
        writeFile('./package.json', dataToWrite, 'utf8', (err) => {
            // auf Fehler prüfen
            if (err) {
                console.error('Error writing file');
            } else {
                console.log('File saved successfully!');
            }
        }); 
    }
});