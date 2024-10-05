 function shop(input) {

let product = input[0];
let town = input[1];
let num = Number(input[2]);

if (town === "Sofia") {
    switch(product) {
        case "coffee": 
        productPrice = 0.50;
        break;       
        case "water": 
        productPrice = 0.80;
        break;
        case "beer": 
        productPrice = 1.20;
        break;
        case "sweets": 
        productPrice = 1.45;
        break;
        case "peanuts": 
        productPrice = 1.60;
        break;
    }
    if (product === "coffee") {
        console.log(productPrice * num);
    } else if (product === "water")  {
        console.log(productPrice * num);
    } else if (product === "beer")  {
        console.log(productPrice * num);
    } else if (product === "sweets")  {
        console.log(productPrice * num);
    } else if (product === "peanuts")  {
        console.log(productPrice * num);
    } else {
        console.log("Item unavailable!")
    }
} else if (town === "Plovdiv") {
    switch(product) {
        case "coffee": 
        productPrice = 0.40;
        break;       
        case "water": 
        productPrice = 0.70;
        break;
        case "beer": 
        productPrice = 1.15;
        break;
        case "sweets": 
        productPrice = 1.30;
        break;
        case "peanuts": 
        productPrice = 1.50;
        break;
    }
    if (product === "coffee") {
        console.log(productPrice * num);
    } else if (product === "water")  {
        console.log(productPrice * num);
    } else if (product === "beer")  {
        console.log(productPrice * num);
    } else if (product === "sweets")  {
        console.log(productPrice * num);
    } else if (product === "peanuts")  {
        console.log(productPrice * num);
    } else {
        console.log("Item unavailable!")
    }
 } else if (town === "Varna") {
    switch(product) {
        case "coffee": 
        productPrice = 0.45;
        break;       
        case "water": 
        productPrice = 0.70;
        break;
        case "beer": 
        productPrice = 1.10;
        break;
        case "sweets": 
        productPrice = 1.35;
        break;
        case "peanuts": 
        productPrice = 1.55;
        break;
    }
    if (product === "coffee") {
        console.log(productPrice * num);
    } else if (product === "water")  {
        console.log(productPrice * num);
    } else if (product === "beer")  {
        console.log(productPrice * num);
    } else if (product === "sweets")  {
        console.log(productPrice * num);
    } else if (product === "peanuts")  {
        console.log(productPrice * num);
    } else {
        console.log("Item unavailable!")
    }
 } else {
    console.log("Error!")
 }
}
shop(["sweets","Sofia","2.23"]);