function Movie(input) {

let MovieBudget = Number(input[0]);
let Extras = Number(input[1]);
let OutfitPrice = Number(input[2]);
let Set = MovieBudget * 0.1;
let TotalOutfitPrice = OutfitPrice * Extras;

if (Extras > 150) {
    TotalOutfitPrice = TotalOutfitPrice * 0.9;
}
let TotalCost = Set + TotalOutfitPrice;
if (TotalCost > MovieBudget) {
    let MoneyNeeded = TotalCost - MovieBudget;
    console.log("Not enough money!");
    console.log(`Wingard needs ${MoneyNeeded.toFixed(2)} leva more.`);
} else if (TotalCost <= MovieBudget) {
    let MoneyLeft = MovieBudget - TotalCost;
    console.log("Action!");
    console.log(`Wingard starts filming with ${MoneyLeft.toFixed(2)} leva left.`)
}
}
Movie(["20000","120","55.5"]);