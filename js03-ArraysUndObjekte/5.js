const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute(){
    const table = {
        hans: ['Hans', 'Müller', 22],
        george: ['George', 'Huber', 37],
        fritz: ['Fritz', 'Mayr', 19],
};

    console.table(table);

    let check;
    let column;
    let row;
    do {
        column = await prompt("Enter column name:");
        row = await prompt("Enter row number:");
        column = table[column.toLowerCase()];

        check = row >= 0 && row < Object.keys(table).length && column !== undefined;
    } while (!check);

    console.log(column[row]);
}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());






