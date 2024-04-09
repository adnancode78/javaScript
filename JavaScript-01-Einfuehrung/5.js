const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    // Euer Code kommt hier hinein
    let letter = await prompt("Please enter letter: ");
    letter = letter.charAt(0).toLowerCase();


    if (letter.charAt(0) >= 122 && letter.charAt(0) < 97 || !isNaN(letter)) {
        console.log("Please input right Character")
    }
    else
        {
            switch (letter) {
                case 'a':

                case 'e':

                case 'i':

                case 'o':

                case 'u':
                    console.log('letter is vowel');
                    break;

                default:
                    console.log('letter is consonant');
                    break;
            }
        }

    // Ende von eurem Code
}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());