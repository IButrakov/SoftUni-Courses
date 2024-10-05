function maxNumber(input) {

let index = 0;
let stringNum = input[index];
let max = Number.NEGATIVE_INFINITY;
while(stringNum !== "Stop") {
    let num = Number(input[index]);
    if (num > max) {
        max = num;
    }
    index++
    stringNum = input[index];
}
console.log(max);


}
maxNumber(["-10",
    "20",
    "-30",
    "Stop"])
    
    