const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() { // put all your codes here for user inputs

    function displayDay(day) {
        const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"];
        return days[day - 1];
    }

    let day;
    do {
        day = await prompt("Enter a number between 1 and 7  ");
    } while (day < 1 || day > 7 || isNaN(day));

    console.log(displayDay(day));

}
execute().catch((err) => { console.error(err); }).finally(() => rl.close());

