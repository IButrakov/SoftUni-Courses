function hristogram(input) {

let numbers = Number(input[0]);
let p1 = 0, p2 = 0, p3 = 0, p4 = 0, p5 = 0;
for (let i = 1; i <= numbers; i++) {
    let num = Number(input[i]);
    if (num < 200) {
        p1++
    } else if (num >= 200 && num < 400) {
        p2++
    } else if (num >= 400 && num < 600) {
        p3++
    } else if (num >= 600 && num < 800) {
        p4++
    } else if (num >= 800) {
        p5++
    }
}
console.log(`${(p1 / numbers * 100).toFixed(2)}%`);
console.log(`${(p2 / numbers * 100).toFixed(2)}%`);
console.log(`${(p3 / numbers * 100).toFixed(2)}%`);
console.log(`${(p4 / numbers * 100).toFixed(2)}%`);
console.log(`${(p5 / numbers * 100).toFixed(2)}%`);

}
hristogram(["3","1","2","999"]);