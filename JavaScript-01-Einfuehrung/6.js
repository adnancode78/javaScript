const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    // Euer Code kommt hier hinein
    const nu1 = parseInt(await prompt ("Please enter number: "));
    const nu2 = parseInt(await prompt("Please enter number: "));
    const op = await prompt("Please enter operator: ");
    switch (op) {
        case '+':
            let nu3 = parseInt(nu1 + nu2) ;
            console.log("Result = " + nu3);
            break;
        case '-':
            let nu4 = parseInt(nu1 - nu2) ;
            console.log("Result = " + nu4);
            break;
        case '*':
            let nu5 = parseInt(nu1 * nu2) ;
            console.log("Result = " + nu5);
            break;
        case '/':
            let nu6 = ( nu1 /  nu2) ;
            console.log("Result = " + nu6);
            break;

    }
    // Ende von eurem Code
}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());