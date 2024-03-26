const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    // Euer Code kommt hier hinein
    const letter = await prompt("Please enter letter: ");
    switch (letter) {
        case 'a':
            console.log('letter is vowel');
            break;
        case 'e':
            console.log('letter is vowel');
            break;
        case 'i':
            console.log('letter is vowel');
            break;
        case 'o':
            console.log('letter is vowel');
            break;
        case 'u':
            console.log('letter is vowel');
;
        default:
            console.log('letter is consonant');
    }
    // Ende von eurem Code
}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());