function FoodDelivery(input) {

let ChickenMenus = Number(input[0]);
let FishMenus = Number(input[1]);
let VeganMenus = Number(input[2]);
let ChickenMenusPrice = ChickenMenus * 10.35;
let FishMenusPrice = FishMenus * 12.40;
let VeganMenusPrice = VeganMenus * 8.15;
let TotalMenuPrice = ChickenMenusPrice + FishMenusPrice + VeganMenusPrice;
let DesertPrice =  TotalMenuPrice - 0.80 * TotalMenuPrice;
let DeliveryPrice = Number(2.50);
let TotalPrice = TotalMenuPrice + DesertPrice + DeliveryPrice;

console.log(TotalPrice);

}
FoodDelivery(["2", "4", "3"]);