//
// Deny the table shown as a two-dimensional array and let the
// User specify a row and column number, enter the desired value
// out of
//
//
// First name      Last name       Old
// Hans	        	Müller		   22
// George	    	Huber		   37
// Fritz	    	Mayr		   19
//  ----------------------------------------------------------------

// (replace "ript" with "script")
const table = [
    ['First name', 'Last name', 'Age'],
    ['Hans', 'Müller', 22],
    ['George', 'Huber', 37],
    ['Fritz', 'Mayr', 19]
];

function printTable() {
    // Print the table
    console.log(table);
}

function updateTable(row, column, value) {

    // Check if the row and column numbers are within the bounds of the table
    if (row > 0 && row < table.length && column >= 0 && column < table[0].length) {
        // Update the specified value in the table
        table[row][column] = value;
        console.log(`Updated value at row ${row}, column ${column}: ${value}`);
    } else {
        console.log('Invalid row or column number.');
    }
}
printTable()
// Example usage:
// User specifies row 2, column 2 (zero-indexed), and the new value 23
updateTable(2, 2, 23);
printTable()