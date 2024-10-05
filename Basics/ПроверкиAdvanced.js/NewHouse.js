function home(input) {
    let flower = input[0];
    let num = Number(input[1]);
    let budget = Number(input[2]);

    switch (flower) {
        case "Roses":
            let rosesPrice = 5;
            let totalPrice1 = num * rosesPrice;
            if (num > 80) {
                totalPrice1 *= 0.9;
            }
            if (budget >= totalPrice1) {
                let moneyLeft = budget - totalPrice1;
                console.log(`Hey, you have a great garden with ${num} ${flower} and ${(moneyLeft).toFixed(2)} leva left.`);
            } else {
                let moneyNeeded = totalPrice1 - budget;
                console.log(`Not enough money, you need ${(moneyNeeded).toFixed(2)} leva more.`);
            }
            break;
        
        case "Dahlias":
            let dahliasPrice = 3.80;
            let totalPrice2 = num * dahliasPrice;
            if (num > 90) {
                totalPrice2 *= 0.85;
            }
            if (budget >= totalPrice2) {
                let moneyLeft = budget - totalPrice2;
                console.log(`Hey, you have a great garden with ${num} ${flower} and ${(moneyLeft).toFixed(2)} leva left.`);
            } else {
                let moneyNeeded = totalPrice2 - budget;
                console.log(`Not enough money, you need ${(moneyNeeded).toFixed(2)} leva more.`);
            }
            break;
        
        case "Tulips":
            let tulipsPrice = 2.80;
            let totalPrice3 = num * tulipsPrice;
            if (num > 80) {
                totalPrice3 *= 0.85;
            }
            if (budget >= totalPrice3) {
                let moneyLeft = budget - totalPrice3;
                console.log(`Hey, you have a great garden with ${num} ${flower} and ${(moneyLeft).toFixed(2)} leva left.`);
            } else {
                let moneyNeeded = totalPrice3 - budget;
                console.log(`Not enough money, you need ${(moneyNeeded).toFixed(2)} leva more.`);
            }
            break;
        
        case "Narcissus":
            let narcissusPrice = 3;
            let totalPrice4 = num * narcissusPrice;
            if (num < 120) {
                totalPrice4 *= 1.15; 
            }
            if (budget >= totalPrice4) {
                let moneyLeft = budget - totalPrice4;
                console.log(`Hey, you have a great garden with ${num} ${flower} and ${(moneyLeft).toFixed(2)} leva left.`);
            } else {
                let moneyNeeded = totalPrice4 - budget;
                console.log(`Not enough money, you need ${(moneyNeeded).toFixed(2)} leva more.`);
            }
            break;
        
        case "Gladiolus":
            let gladiolusPrice = 2.50;
            let totalPrice5 = num * gladiolusPrice;
            if (num < 80) {
                totalPrice5 *= 1.20;
            }
            if (budget >= totalPrice5) {
                let moneyLeft = budget - totalPrice5;
                console.log(`Hey, you have a great garden with ${num} ${flower} and ${(moneyLeft).toFixed(2)} leva left.`);
            } else {
                let moneyNeeded = totalPrice5 - budget;
                console.log(`Not enough money, you need ${(moneyNeeded).toFixed(2)} leva more.`);
            }
            break;

        default:
            console.log("Wrong input!");
    }
}
home(["Narcissus", "119", "360"]);