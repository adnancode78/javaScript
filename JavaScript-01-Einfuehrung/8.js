const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    // Euer Code kommt hier hinein
    const nu = parseInt(await prompt ("Please enter number: "));


    if (nu % 2 == 0) {
        console.log(nu + " is even");
    } else if (nu % 2 == 1) {

        console.log(nu + " is odd");
    }else {
        console.log( " is Comma ");
    }
    // Ende von eurem Code
}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());