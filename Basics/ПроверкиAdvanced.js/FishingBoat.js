function boat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let num = Number(input[2]);
    let price;

    switch(season) {
        case "Spring":
            price = 3000;
            break;
        case "Summer":
        case "Autumn":
            price = 4200;
            break;
        case "Winter":
            price = 2600;
            break;
        default:
            console.log("Error");
            return;
    }

    if (num <= 6) {
        price *= 0.9;
    } else if (num > 6 && num <= 11) {
        price *= 0.85;
    } else if (num >= 12) {
        price *= 0.75;
    }

    if (num % 2 === 0 && season !== "Autumn") {
        price *= 0.95;
    }

    if (budget >= price) {
        let moneyLeft = budget - price;
        console.log(`Yes! You have ${(moneyLeft).toFixed(2)} leva left.`);
    } else {
        let moneyNeeded = price - budget;
        console.log(`Not enough money! You need ${(moneyNeeded).toFixed(2)} leva.`);
    }
}

boat(["3600", "Autumn", "6"]);
