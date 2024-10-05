function combinations(input) {
    let number = Number(input[0]);
    let counter = 0;
for (let x = 0; x <= number; x++) {
    for (let y = 0; y <= number; y++) {
        for (let z = 0; z <= number; z++) {
            let solution = x + y + z;
            if (solution === number) {
                counter++;                
            }
        }
    }
}
console.log(counter);
}
combinations(["25"]);