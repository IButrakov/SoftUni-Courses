function record(input) {

let WorldRecord = Number(input[0]);
let Distance = Number(input[1]);
let Time = Number(input[2]);
let SimulatedTime = Distance * Time;
let TimeLoss = Math.floor(Distance / 15) * 12.5;
let ActualTime = SimulatedTime + TimeLoss;

if (ActualTime < WorldRecord) {
    console.log(`Yes, he succeeded! The new world record is ${ActualTime.toFixed(2)} seconds.`)  
} else {
    TimeDifference = ActualTime - WorldRecord;
    console.log(`No, he failed! He was ${TimeDifference.toFixed(2)} seconds slower.`);
}
}
record(["10464","1500","20"]);