const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

rl.on('close', () => process.exit(0));

async function execute() {
    try {
        // Get user input
        const number = parseInt(await prompt("Please enter a number: "));

        // Check if the number is even using the isEven function
        const isEven = (zahl) => zahl % 2 === 0;
        if (isEven(number)) {
            console.log(`${number} is even.`);
        } else {
            console.log(`${number} is odd.`);
        }
    } catch (err) {
        console.error("Error:", err);
    } finally {
        rl.close();
    }
}

execute();