function shop(input) {
    let fruit = input[0];
    let day = input[1];
    let num = Number(input[2]);
    
    let price;
    
    switch(day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            if (fruit === "banana") {
                price = 2.50;
            } else if (fruit === "apple") {
                price = 1.20;
            } else if (fruit === "orange") {
                price = 0.85;
            } else if (fruit === "grapefruit") {
                price = 1.45;
            } else if (fruit === "kiwi") {
                price = 2.70;
            } else if (fruit === "pineapple") {
                price = 5.50;
            } else if (fruit === "grapes") {
                price = 3.85;
            } else {
                console.log("error");
                return;
            }
            break;
        case "Saturday":
        case "Sunday":
            if (fruit === "banana") {
                price = 2.70;
            } else if (fruit === "apple") {
                price = 1.25;
            } else if (fruit === "orange") {
                price = 0.90;
            } else if (fruit === "grapefruit") {
                price = 1.60;
            } else if (fruit === "kiwi") {
                price = 3.00;
            } else if (fruit === "pineapple") {
                price = 5.60;
            } else if (fruit === "grapes") {
                price = 4.20;
            } else {
                console.log("error");
                return;
            }
            break;
        default:
            console.log("error");
            return;
    }
    let totalPrice = (price * num).toFixed(2);
    console.log(totalPrice);
}
shop(["apple", "Tuesday", "2"]); 
