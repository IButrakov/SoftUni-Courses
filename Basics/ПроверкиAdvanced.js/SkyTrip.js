function skyTrip(input) {

let days = Number(input[0]);
let room = input[1];
let evaluation = input[2];
let price;
let totalPrice;
let nights = days - 1;
switch(room) {
    case "room for one person":
        price = 18 * nights;
    break;
    case "apartment":
        price = 25 * nights;
        if(days < 10) {
            price = price * 0.70;
        } else if(days >= 10 && days < 15) {
            price = price * 0.65;
        } else if(days >= 15) {
            price = price * 0.50;
        }
    break;
    case "president apartment":
        price = 35 * nights;
        if(days < 10) {
            price = price * 0.90;
        } else if(days >= 10 && days < 15) {
            price = price * 0.85;
        } else if(days >= 15) {
            price = price * 0.80;
        }
}
if(evaluation === "positive") {
    totalPrice = price + price * 0.25;
} else if(evaluation === "negative") {
    totalPrice = price - price * 0.10;
}
console.log((totalPrice).toFixed(2));
}
skyTrip(["2","apartment","positive"]);