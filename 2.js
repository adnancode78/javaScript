const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() { // put all your codes here for user inputs

    const persons = [
        { name: "Remark", age: 36 },
        { name: "Noel", age: 24 },
        { name: "Bush", age: 40 }
    ];

    for (const p of persons) {
        console.log(`${p.name} is ${p.age} .`);
    }

}
execute().catch((err) => { console.error(err); }).finally(() => rl.close());
