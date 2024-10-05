function Shoping(input) {

let Budget = Number(input[0]);
let GraphicCardNumber = Number(input[1]);
let ProcessorNumber = Number(input[2]);
let RamNumber = Number(input[3]);
let GraphicCardPrice = 250
let ProcessorPrice = (GraphicCardNumber * GraphicCardPrice) * 0.35;
let RamPrice = (GraphicCardNumber * GraphicCardPrice) * 0.1;
let TotalGraphicsCost = GraphicCardNumber * GraphicCardPrice;
let TotalProcessorCost = ProcessorNumber * ProcessorPrice;
let TotalRamCost = RamNumber * RamPrice;
let TotalCost = TotalGraphicsCost + TotalProcessorCost + TotalRamCost;
if (GraphicCardNumber > ProcessorNumber) {
    TotalCost = TotalCost - TotalCost * 0.15
}
if (Budget >= TotalCost) {
    let Moneyleft = Budget - TotalCost;
    console.log(`You have ${Moneyleft.toFixed(2)} leva left!`);
} else {
    let MoneyNeeded = TotalCost - Budget;
    console.log(`Not enough money! You need ${MoneyNeeded.toFixed(2)} leva more!`);
}

}
Shoping(["920.45","3","1","1"]);