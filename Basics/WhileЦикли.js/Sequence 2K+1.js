function sequence(input) {

let num1 = Number(input[0]);
let num2 = 1;
while(num1 >= num2) {
    console.log(num2);
    num2 *= 2;
    num2++
}

}
sequence(["31"]);