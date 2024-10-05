function tennisRankList(input) {

let tournaments = Number(input[0]);
let startingPoints = Number(input[1]);
let totalResult = startingPoints;
let w = 0, f = 0, sf = 0;
let position = {
    "W": 2000,
    "F": 1200,
    "SF": 720,
};
for (let i = 2; i < input.length; i++) {
        let result = input[i];
        if (position[result]) {
            totalResult += position[result]
        }
        if (result === "W") {
            w++
        }
        if (result === "F") {
            f++
        }
        if (result === "SF") {
            sf++
        }
}
let averagePoints = (totalResult - startingPoints) / tournaments;
let winRate = w / tournaments * 100;
console.log(`Final points: ${totalResult}`);
console.log(`Average points: ${Math.floor(averagePoints)}`);
console.log(`${(winRate).toFixed(2)}%`);
}
tennisRankList(["5","1400","F","SF","W","W","SF"]);
    