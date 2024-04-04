const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    // Define the days of the week in an array (moved outside the function)
    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    const dayNumber = parseInt(await prompt("Enter a number from 1-7 to get the corresponding day: "), 10);
    console.log(getDay(dayNumber));

    // Function to read a number and output the corresponding day
    function getDay(number) {
        if (number >= 1 && number <= 7) {
            return daysOfWeek[number - 1];
        } else {
            return "Invalid number. Please enter a number from 1-7.";
        }
    }
}

execute();

