function Equipment(input) {

let TraningPrice = Number(input[0]);    
let Jordans = TraningPrice - 0.40 * TraningPrice;
let Jerseys = Jordans - 0.20 * Jordans;
let Ball = Jerseys * 1/4;
let AdditionalEquipment = Ball * 1/5;
let TotalPrice = TraningPrice + Jordans + Jerseys + Ball + AdditionalEquipment;


console.log(TotalPrice);

}
Equipment(["365"]);