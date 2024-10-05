function trekkingMania(input) {

let climbersGroups = Number(input[0]);
let g1 = 0, g2 = 0, g3 = 0, g4 = 0, g5 = 0;
let numberOFClimbers = 0;
for (let i = 1; i < input.length; i++) {
    let num = Number(input[i]);
    numberOFClimbers += num;
}
for (let i = 1; i <= climbersGroups; i++) {
    let num = Number(input[i]);
    if (num <= 5) {
        g1 += num;
    } else if (num > 5 && num <= 12) {
        g2 += num;
    } else if (num > 12 && num <= 25) {
        g3 += num;
    } else if (num > 25 && num <= 40) {
        g4 += num;
    } else if (num > 40) {
        g5 += num;
    }
}
    console.log(`${((g1 / numberOFClimbers) * 100).toFixed(2)}%`);
    console.log(`${((g2 / numberOFClimbers) * 100).toFixed(2)}%`);
    console.log(`${((g3 / numberOFClimbers) * 100).toFixed(2)}%`);
    console.log(`${((g4 / numberOFClimbers) * 100).toFixed(2)}%`);
    console.log(`${((g5 / numberOFClimbers) * 100).toFixed(2)}%`);    
}
trekkingMania(["10","10","5","1","100","12","26","17","37","40","78"]);

    