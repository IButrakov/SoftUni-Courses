function braceletStand(input) {

let moneyPerDay = Number(input[0]);
let earndMoney = Number(input[1]);
let moneySpend = Number(input[2]);
let giftPrice = Number(input[3]);
let daysLeft = 5;
let savedMoney = daysLeft * moneyPerDay;
let totalMoneyEarnd = daysLeft * earndMoney;
let totalMoney = savedMoney + totalMoneyEarnd;
let moneyWithoutExpenses = totalMoney - moneySpend;
if (moneyWithoutExpenses >= giftPrice) {
    console.log(`Profit: ${(moneyWithoutExpenses).toFixed(2)} BGN, the gift has been purchased.`);    
} else if (giftPrice > moneyWithoutExpenses) {
    let moneyNeeded = giftPrice - moneyWithoutExpenses;
    console.log(`Insufficient money: ${(moneyNeeded).toFixed(2)} BGN.`);
}
}
braceletStand(["5.12", "32.05", "15", "150"]);