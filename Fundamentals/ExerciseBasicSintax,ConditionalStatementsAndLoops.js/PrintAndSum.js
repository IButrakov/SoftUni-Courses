function solve(x,y) {
    let numbers = ''
    let sum = 0;
    for (let i = x; i <= y; i++) {
        numbers += i + ' ';
        sum += i
    }
    console.log(numbers.trim());
    console.log(`Sum: ${sum}`);
}
solve(50,60);