const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    // Euer Code kommt hier hinein
    const password = await prompt("Please enter Password: ");
if (password==1234){
    console.log('password is true');
}else {
    console.log('password is falsh');
}




    // Ende von eurem Code
}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());