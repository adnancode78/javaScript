const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    // Euer Code kommt hier hinein
    const nu1 = parseInt(await prompt ("Please enter number: "));
    const nu2 = parseInt(await prompt("Please enter number: "));
    const nu3 = parseInt(await prompt ("Please enter number: "));
    const nu4 = parseInt(await prompt("Please enter number: "));
    let max = Math.max (nu1, nu2, nu3, nu4);

    let min = Math.min (nu1, nu2, nu3, nu4);
    console.log("max number is " + max);
    console.log("min number is " + min);






    // Ende von eurem Code
}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());