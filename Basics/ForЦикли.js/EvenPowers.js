function evenPowers(input) {

let num = Number(input[0]);
for (i = 0; i <= num; i += 2) {
    console.log(Math.pow(2, i));
}

}
evenPowers(["3"]);