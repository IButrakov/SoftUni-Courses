function cleverLily(input) {

let age = Number(input[0]);
let washingMachinePrice = Number(input[1]);
let toyPrice = Number(input[2]);
let toys = 0;
let money = 0;
let moneyFromToys = 0;
let totalMoneySaved = 0;
let increment = 10;
let moneyleft = 0;
let moneyNeeded = 0;
for (let i = 1; i <= age; i ++) {
    if (i % 2 !== 0) {
        toys++
    }
    if (i % 2 === 0) {
        money += increment;
        increment += 10;
        money -=1;
    }
}
moneyFromToys = toys * toyPrice;
totalMoneySaved = moneyFromToys + money;
if (totalMoneySaved >= washingMachinePrice) {
    moneyleft = totalMoneySaved - washingMachinePrice;
    console.log(`Yes! ${(moneyleft).toFixed(2)}`);
} else if (totalMoneySaved < washingMachinePrice) {
    moneyNeeded = washingMachinePrice - totalMoneySaved;
    console.log(`No! ${(moneyNeeded).toFixed(2)}`);
}
}
cleverLily(["21","1570.98","3"]);
    