function minNumber(input) {

    let index = 0;
    let min = Number.POSITIVE_INFINITY;
    while (input[index] !== "Stop") {
        let num = Number(input[index]);
        if (num < min) {
            min = num;
        }
        index++
    }
    console.log(min);
    
}
minNumber(["100", "99", "80", "70", "Stop"])