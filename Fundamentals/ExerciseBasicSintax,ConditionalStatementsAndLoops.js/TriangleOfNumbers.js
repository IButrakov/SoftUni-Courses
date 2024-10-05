function solve(x) {
    
for (let row = 1; row <= x; row++) {
    let line = ' ';
    for (let num = 1; num <= row; num++) {
       line += row + ' '; 
    }
    console.log(line.trim());
}

}
solve(3);