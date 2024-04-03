const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    // Euer Code kommt hier hinein
    const nu = parseInt(await prompt ("Please enter number: "));


    function isEven (a) {

        if (nu % 2 == 0) {
            console.log("True");
        } else if (nu % 2 == 1) {

            console.log("false");
        }
        return null;
    }

isEven()


    // Ende von eurem Code
}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());