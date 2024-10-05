function login(input) {
    
let username = input[0];
let password = '';
let attempts = 1;
let maxAttempts = 4;

for (let a = username.length - 1; a >= 0; a--) {
    let currentChar = username[a];
    password += currentChar;
}
for (let b = 1; b <= maxAttempts; b++) {
    let userInput = input[b];
    if (userInput === password) {
        console.log(`User ${username} logged in.`);
        break;
    } else {
        if (attempts === maxAttempts) {
            console.log(`User ${username} blocked!`);
            break;
        }

        console.log(`Incorrect password. Try again.`); 
    }
    attempts ++;
}
}
login(['sunny','rainy','cloudy','sunny','not sunny'])