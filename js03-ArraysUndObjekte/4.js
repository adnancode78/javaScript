//
//     Use the same table as a two-dimensional array, but let the user
//     specify a row number and the name of a column. Use for
//     Assignment of the column name to a column number of an object. Give that
//     desired value.

// ---------------------------------------------------------------- --------------------------------


const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    const table = [
        ['Hans', 'Müller', 22],
        ['George', 'Huber', 37],
        ['Fritz', 'Mayr', 19],
    ];
    const columnKeys ={
            hans: 0,
            george: 1,
            fritz: 2,
    }

    console.table(table);

    let check;
    let column;
    let row;
    do {
        column = await prompt("Enter column name:");
        row = await prompt("Enter row number:");
        column = columnKeys[column.toLowerCase()];

        check = row >= 0 && row < table.length && column >= 0 && column < table.length;
    } while (!check);

    console.log(table[column][row]);
}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());






