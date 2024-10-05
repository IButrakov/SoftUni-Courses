function PaintJob(input) {

let PlasticCovers = Number(input[0]);
let Paint = Number(input[1]);
let Thinners = Number(input[2]);
let Hours = Number (input[3]);
let PlasticCoversPrice = (PlasticCovers + 2) * 1.50; 
let PaintPrice = (Paint + 0.10 * Paint) * 14.50; 
let ThinnersPrice = Thinners * 5; 
let BagsPrice = Number (0.40);
let Total = PlasticCoversPrice + PaintPrice + ThinnersPrice + BagsPrice;
let WorkersCost = (Total * 0.30) * Hours; 
let TotalPriceWithWorkers = Total + WorkersCost;

console.log (TotalPriceWithWorkers);

}
PaintJob(["10","11","4","8"]);