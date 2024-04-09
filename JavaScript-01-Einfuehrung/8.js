const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    const num1 = parseFloat(await prompt("Please Enter Number : "));
    const num2 = parseInt(num1);

    if (num1 !== num2)
        console.log("Decimal No.");
    else
    {
        if(num1 % 2 === 0)
            console.log("Your Number is Even");
        else
            console.log("Your Number is Odd");
    }


}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());