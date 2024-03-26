const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    // Euer Code kommt hier hinein
    const day = await prompt("Please enter number ( 1  -  7 ): ");
    switch (day) {
        case '1':
            console.log('today is Sunday');
            break;
        case '2':
            console.log('today is Monday');
            break;
        case '3':
            console.log('today is Tuesday');
            break;
        case '4':
            console.log('today is Wednesday');
            break;
        case '5':
            console.log('today is Thursday');
            break;
        case '6':
            console.log('today is Friday');
            break;
        case '7':
            console.log('today is Saturday');
            break;
        default:
            console.log('wrong Number');
    }
    // Ende von eurem Code
}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());