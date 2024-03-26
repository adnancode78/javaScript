const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    // Euer Code kommt hier hinein
    let temp = await prompt("Please enter the tempratur: ");

    temp = parseInt(temp);

    if ( temp < 7) {

        console.log('the wather  is  cold  ')
    }else if (temp < 18 ){
        console.log('the wather  is  nice  ');
    }else if (temp < 30 ){
        console.log('the wather  is  hot  ');
    }else {
        console.log('the wather  is  hell  ');
    }






  



    // Ende von eurem Code
}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());