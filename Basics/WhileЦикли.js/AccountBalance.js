function balance(input) {

let money = 0;
let index = 0;
let increase = Number(input[index]);
while (increase !== "NoMoreMoney") {
    let amount = Number(increase);
    if(amount <= 0) {
        console.log("Invalid operation!");
        break;
    }
    console.log(`Increase: ${(amount).toFixed(2)}`);
    money += amount;
    index++;
    increase = input[index];
}
console.log(`Total: ${(money).toFixed(2)}`);

}
balance(["120",
    "45.55",
    "-150"]);
    
    