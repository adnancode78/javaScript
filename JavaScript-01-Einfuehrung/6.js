const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    // Euer Code kommt hier hinein
    const nu1 = await prompt("Please enter number: ");
    const nu2 = await prompt("Please enter number: ");
    const op = await prompt("Please enter operator: ");
    switch (op) {
        case '+':
let nu3 = nu1 + nu2 ;
            console.log(nu3);
            break;
        case '-':
            console.log('letter is vowel');
            break;
        case '*':
            console.log('letter is vowel');
            break;
        case '/':
            console.log('letter is vowel');
            break;

    }
    // Ende von eurem Code
}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());