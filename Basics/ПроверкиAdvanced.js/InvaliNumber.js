function unvalidNumber(input) {

let num = Number(input[0]);
if (num !== 0 && (num < 100 || num > 200)) {
    console.log("invalid");
}
}
unvalidNumber(["0"]);