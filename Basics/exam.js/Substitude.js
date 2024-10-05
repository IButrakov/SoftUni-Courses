function generateCombinations(input) {
    let a1 = Number(input[0]);
    let a2 = Number(input[1]);
    let b1 = Number(input[2]);
    let b2 = Number(input[3]);

    for (let firstDigit1 = a1; firstDigit1 <= a2; firstDigit1++) {
        for (let secondDigit1 = 9; secondDigit1 >= 6; secondDigit1--) {
            for (let firstDigit2 = b1; firstDigit2 <= b2; firstDigit2++) {
                for (let secondDigit2 = 9; secondDigit2 >= 5; secondDigit2--) {
                    
                    if (firstDigit1 % 2 === 0 && secondDigit1 % 2 !== 0 &&
                        firstDigit2 % 2 === 0 && secondDigit2 % 2 !== 0) {
                        
                        if (firstDigit1 !== firstDigit2 || secondDigit1 !== secondDigit2) {
                            console.log(`${firstDigit1}${secondDigit1} - ${firstDigit2}${secondDigit2}`);
                        } else {
                            console.log("Cannot change the same player.");
                        }
                    }
                }
            }
        }
    }
}

generateCombinations(['6', '7', '5', '6']);  

