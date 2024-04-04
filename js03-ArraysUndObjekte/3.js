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


const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    const table = [
        ['Hans', 'Müller', 22],
        ['George', 'Huber', 37],
        ['Fritz', 'Mayr', 19]
    ];

    console.table(table);

    let check;
    let column;
    let row;
    do {
        column = await prompt("Enter column number:");
        row = await prompt("Enter row number:");

        check = row >= 0 && row < table.length && column >= 0 && column < table.length;
    } while (!check);

    console.log(table[column][row]);
}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());