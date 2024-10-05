function grandpaStavri(input) {

let days = Number(input[0]);
let totalRakya = 0;
let totalDegrees = 0;
let index = 1;
for (let i = 0; i < days; i++) {
    let dailyLiters = Number(input[index]);
    let dailyDegrees = Number(input[index + 1]);
    totalRakya += dailyLiters;
    totalDegrees += dailyLiters * dailyDegrees;
    index += 2;
}
let averageDegrees = totalDegrees / totalRakya;
console.log(`Liter: ${(totalRakya).toFixed(2)}`);
console.log(`Degrees: ${(averageDegrees).toFixed(2)}`);
if (averageDegrees < 38) {
    console.log(`Not good, you should baking!`);
} else if (averageDegrees >= 38 && averageDegrees <42) {
    console.log(`Super!`);
} else if (averageDegrees >= 42) {
    console.log(`Dilution with distilled water!`);
    
}
}
grandpaStavri(["3","100","45","50","55","150","36"]);