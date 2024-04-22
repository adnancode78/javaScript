const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

const maze = [
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '#', ' ', ' ', '#', ' ', '#'],
    [' ', ' ', ' ', '#', '#', ' ', '#'],
    ['#', '#', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['#', ' ', '#', ' ', '#', '#', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
];

const win = {y: 6, x: 6};
const whole = {y: 4, x: 1};
const box = {y: 2, x: 2};

async function execute() {
    let game = true;
    let x = Math.floor(Math.random() * 5) + 1;
    let y = 0;
    while (game) {
        console.clear();
        maze[y][x] = '\x1b[33m😁\x1b[0m';
        maze[win.y][win.x] = '\x1b[31m👑\x1b[0m';
        maze[whole.y][whole.x] = '\x1b[32m💩\x1b[0m';
        maze[box.y][box.x] = '\x1b[41m💣\x1b[0m';

        for (let column of maze) {
            let line = "";
            for (let row of column) {
                line += " " + row + " ";
            }
            console.log(line);

        }
        if (x === win.x && y === win.y) {
            console.log(" Congratlation You win 😊😊😊👑👑👑👑!");
            game = false;
        } else if (x === whole.x && y === whole.y) {
            console.log("You get in whole! You loose Hard Luck  😞💩💩💩💩💩");
            game = false;
        } else {
            let check;
            do {
                const direction = await prompt('Please enter next step ("w" - up, "s" - down, "a" - left, "d" - right, "x" - break): ');
                let stepCheck = true;
                switch (direction.toLowerCase()) {
                    case 'x':
                        console.log("Good luck 🙋🙋🙋🙋 :)");
                        check = true;
                        game = false;
                        break;
                    case 'w':
                        if (y - 1 >= 0 && maze[y - 1][x] !== '#') {
                            stepCheck = true;
                            if (maze[y - 1][x] === '💣') {
                                stepCheck = false;
                                if (y - 2 >= 0 && (maze[y - 2][x] === ' ' || maze[y - 2][x] === 'W')) {
                                    maze[box.y][box.x] = ' ';
                                    box.y--;
                                    stepCheck = true;
                                }
                            }
                            if (stepCheck) {
                                maze[y][x] = ' ';
                                y--;
                                check = true;
                            }
                        }
                        break;
                    case 's':
                        if (y + 1 < maze.length && maze[y + 1][x] !== '#') {
                            stepCheck = true;
                            if (maze[y + 1][x] === '💣') {
                                stepCheck = false;
                                if (y + 2 < maze.length && (maze[y + 2][x] === ' ' || maze[y + 2][x] === 'W')) {
                                    maze[box.y][box.x] = ' ';
                                    box.y++;
                                    stepCheck = true;
                                }
                            }
                            if (stepCheck) {
                                maze[y][x] = ' ';
                                y++;
                                check = true;
                            }
                        }
                        break;
                    case 'a':
                        if (x - 1 >= 0 && maze[y][x - 1] !== '#') {
                            stepCheck = true;
                            if (maze[y][x - 1] === '💣') {
                                stepCheck = false;
                                if (x - 2 >= 0 && (maze[y][x - 2] === ' ' || maze[y][x - 2] === 'W')) {
                                    maze[box.y][box.x] = ' ';
                                    box.x--;
                                    stepCheck = true;
                                }
                            }
                            if (stepCheck) {
                                maze[y][x] = ' ';
                                x--;
                                check = true;
                            }
                        }
                        break;
                    case 'd':
                        if (x + 1 < maze.length && maze[y][x + 1] !== '#') {
                            stepCheck = true;
                            if (maze[y][x + 1] === '💣') {
                                stepCheck = false;
                                if (x + 2 >= 0 && (maze[y][x + 2] === ' ' || maze[y][x + 2] === 'W')) {
                                    maze[box.y][box.x] = ' ';
                                    box.x++;
                                    stepCheck = true;
                                }
                            }
                            if (stepCheck) {
                                maze[y][x] = ' ';
                                x++;
                                check = true;
                            }
                        }
                        break;
                    default:
                        console.log("Incorrect input :(");
                }
            } while (!check);
        }
    }
}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());