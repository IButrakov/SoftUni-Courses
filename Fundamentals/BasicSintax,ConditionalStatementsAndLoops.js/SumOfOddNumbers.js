function solve(times) {
    let counter = 0;
    let num = 1;
    let sum = 0;
    while (counter < times) {
        if (num % 2 !== 0) {
            console.log(num);
            counter++
            sum += num
        }
        num++
    }
    console.log(`Sum: ${sum}`);
}
solve(5);