function log(...args) {
    let line = "";
    for (let word of args) {
        line += word + " ";
    }
    console.log(line);
}

log("Neighbor", "computer");