function oscars(input) {

let actorName = input[0];
let academyPoints = Number(input[1]);
let judgesNumber = Number(input[2]);
let targetPoints = 1250.5;
let awardedPoints = academyPoints;
for (let i = 3; i < input.length; i+= 2) {
    let judgeName = input[i];
    let judgePoints = Number(input[i + 1]);
    let currentPoints =(judgePoints * judgeName.length) / 2;
    awardedPoints += currentPoints;
    if (awardedPoints >= targetPoints) {
        break;
    }
}
//if  (awardedPoints >= targetPoints) {
//        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${(awardedPoints).toFixed(1)}!`);
//        return;
//} else if (awardedPoints < targetPoints) {
//    let pointNeeded = targetPoints - awardedPoints;
//    console.log(`Sorry, ${actorName} you need ${(pointNeeded).toFixed(1)} more!`);
//    return;
//}
}
oscars(["Sandra Bullock",
    "340",
    "5",
    "Robert De Niro",
    "50",
    "Julia Roberts",
    "40.5",
    "Daniel Day-Lewis",
    "39.4",
    "Nicolas Cage",
    "29.9",
    "Stoyanka Mutafova",
    "33"])
    
    