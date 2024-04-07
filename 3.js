const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));
async function execute() { // put all your codes here for user inputs

    let trial =0;
    console.log("Player 1 enter a number between 1 and 100: ");
    let player1;
    do {
        player1 = await prompt("Player one Number:  ");
        console.clear();
    } while (isNaN(player1) || player1 < 1 || player1 > 100);

    console.log("Player 2, guess the number what PLayer 1 Chose: ");
    let player2;
    do {
        player2 = await prompt("Player Two Number:  ");
        trial++;
        if (player2 < player1) {
            console.log(`Guess Higher: You are @ trial ${trial}`);
        } else if (player2 > player1) {
            console.log(`Guess Lower: You are @ trial ${trial}`);

        }
    } while (player2 !== player1 || isNaN(player2));

    console.log(`Finally You Won in ${trial} trials.`);

}
execute().catch((err) => { console.error(err); }).finally(() => rl.close());
