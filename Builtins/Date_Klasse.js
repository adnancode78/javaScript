const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});

const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

rl.on('close', () => process.exit(0));

const getCurrentDateTime = () => {
    const now = new Date();

    const format = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    };

    const dateAndTime = now.toLocaleDateString('de', format);
    return dateAndTime;
};

async function execute() {
    const formattedDateAndTime = getCurrentDateTime();
    console.log("😁😁😁😁😁😁😁😁")

    console.log('\x1b[33mCurrent Date and Time:', formattedDateAndTime)+"\x1b[0m";
    console.log("😁😁😁😁😁😁😁😁")
}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());