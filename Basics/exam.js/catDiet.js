function catDiet(input) {

let fatsPercent = Number(input[0]) / 100;
let proteinsPercent = Number(input[1]) / 100;
let carbohydratesPercent = Number(input[2]) / 100;
let totalCalories = Number(input[3]);
let waterPercent = Number(input[4]) / 100;
let fatGrams = (fatsPercent * totalCalories) / 9;
let proteinsGrams = (proteinsPercent * totalCalories) / 4;
let carbohydratesGrams = (carbohydratesPercent * totalCalories) / 4;
let foodWeight = fatGrams + proteinsGrams + carbohydratesGrams;
let caloriesPerGram = totalCalories / foodWeight;
let caloriesWithoutWater = caloriesPerGram - caloriesPerGram * waterPercent;
console.log((caloriesWithoutWater).toFixed(4));

}
catDiet(["60","25","15","2500","60"]);