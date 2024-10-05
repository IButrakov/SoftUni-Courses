function SchoolMaterials(input) {

let PenPacks = Number(input[0]);
let MarkerPacks = Number(input[1]);
let SprayCleaner = Number(input[2]);
let Discount = Number(input[3]) / 100;
let PenPrice = PenPacks * 5.80;
let MarkerPrice = MarkerPacks * 7.20;
let CleanerPrice = SprayCleaner * 1.20;
let TotalPrice = PenPrice + MarkerPrice + CleanerPrice;
let PriceWithDiscount = TotalPrice - (TotalPrice * Discount);

console.log(PriceWithDiscount);

}
SchoolMaterials(["2","3","4","25"]);