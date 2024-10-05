function journey(input) {

let budget = Number(input[0]);
let season = input[1];
if(budget <= 100) {
    let destination = "Bulgaria";
    switch(season) {
        case "summer":
            budget *= 0.30;
            let vacationSummer = "Camp"
            console.log(`Somewhere in ${destination}`);
            console.log(`${vacationSummer} - ${(budget).toFixed(2)}`);
        break;
        case "winter":
            budget *= 0.70;
            let vacationWinter = "Hotel"
            console.log(`Somewhere in ${destination}`);
            console.log(`${vacationWinter} - ${(budget).toFixed(2)}`);
        break;
    return;
    }
} else if(budget <= 1000) {
    let destination = "Balkans"
    switch(season) {
        case "summer":
            budget *= 0.40;
            let vacationSummer = "Camp"
            console.log(`Somewhere in ${destination}`);
            console.log(`${vacationSummer} - ${(budget).toFixed(2)}`);
        break;
        case "winter":
            budget *= 0.80;
            let vacationWinter = "Hotel"
            console.log(`Somewhere in ${destination}`);
            console.log(`${vacationWinter} - ${(budget).toFixed(2)}`);
        break;
    return;
    }
} else if(budget > 1000) {
    let destination = "Europe"
    switch(season) {
        case "summer":
            budget *= 0.90;
            let vacationSummer = "Hotel"
            console.log(`Somewhere in ${destination}`);
            console.log(`${vacationSummer} - ${(budget).toFixed(2)}`);
        break;
        case "winter":
            budget *= 0.90;
            let vacationWinter = "Hotel"
            console.log(`Somewhere in ${destination}`);
            console.log(`${vacationWinter} - ${(budget).toFixed(2)}`);
        break;
    return;
    }
}

}
journey(["1500","summer"]);