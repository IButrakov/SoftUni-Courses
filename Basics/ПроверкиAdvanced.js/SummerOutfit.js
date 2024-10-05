function summerOutfit(input) {

let degrees = Number(input[0]);
let timeOFTheDay = input[1];
switch(timeOFTheDay) {
    case "Morning" :
        if(degrees >= 10 && degrees <= 18) {
            let outfit = "Sweatshirt";
            let shoes = "Sneakers";
            console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
        }
        else if(degrees > 18 && degrees <= 24) {
            let outfit = "Shirt";
            let shoes = "Moccasins";
            console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
        }
        else if(degrees >= 25) {
            let outfit = "T-Shirt";
            let shoes = "Sandals";
            console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
        } else {
            console.log("error");
        }
    break;
    case "Afternoon" :
        if(degrees >= 10 && degrees <= 18) {
            let outfit = "Shirt";
            let shoes = "Moccasins";
            console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
        }
        else if(degrees > 18 && degrees <= 24) {
            let outfit = "T-Shirt";
            let shoes = "Sandals";
            console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
        }
        else if(degrees >= 25) {
            let outfit = "Swim Suit";
            let shoes = "Barefoot";
            console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
        } else {
            console.log("error");
        }
    break;
    case "Evening" :
        if(degrees >= 10 && degrees <= 18) {
            let outfit = "Shirt";
            let shoes = "Moccasins";
            console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
        }
        else if(degrees > 18 && degrees <= 24) {
            let outfit = "Shirt";
            let shoes = "Moccasins";
            console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
        }
        else if(degrees >= 25) {
            let outfit = "Shirt";
            let shoes = "Moccasins";
            console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
        } else {
            console.log("error");
        }
    break;
default:
    console.log("error");
    }
}
summerOutfit(["25","Afternoon"]);