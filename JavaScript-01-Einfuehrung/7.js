const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    // Euer Code kommt hier hinein
    let num1 = parseInt(await prompt ("Please enter number: "));
    let num2 = parseInt(await prompt("Please enter number: "));
    let num3 = parseInt(await prompt ("Please enter number: "));
    let num4 = parseInt(await prompt("Please enter number: "));

        let max = num1;
        if (num2 > max) {
            max = num2;
        }
        if (num3 > max) {
            max = num3;
        }
        if (num4 > max) {
            max = num4;
        }



    console.log("The maximum number is:", max);





    // Ende von eurem Code
}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());



