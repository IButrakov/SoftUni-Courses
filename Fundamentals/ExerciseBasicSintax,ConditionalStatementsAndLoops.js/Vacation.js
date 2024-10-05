function solve(num,type,day) {
    let price = 0;
   switch (day) {
    case "Friday":
        switch (type) {
            case "Students":
                price = 8.45 * num;
                if (num >= 30) {
                    price = price - price * 0.15;
                }
                break;
            case "Business":
                price = 10.90 * num;
                if (num >= 100) {
                    price = price - (10.90 * 10);
                }
                break;
            case "Regular":
                price = 15 * num;
                if (num >= 10 && num <= 20) {
                    price = price - price * 0.05;
                }
                break;
        default:
                break;
            }
            break;
                case "Saturday":
                    switch (type) {
                        case "Students":
                            price = 9.80 * num;
                            if (num >= 30) {
                                price = price - price * 0.15;
                            }
                            break;
                        case "Business":
                            price = 15.60 * num;
                            if (num >= 100) {
                                price = price - (15.60 * 10);
                            }
                            break;
                        case "Regular":
                            price = 20 * num;
                            if (num >= 10 && num <= 20) {
                                price = price - price * 0.05;
                            }
                            break;
            default:
                break;
            }
            break;
                case "Sunday":
                    switch (type) {
                        case "Students":
                            price = 10.46 * num;
                            if (num >= 30) {
                                price = price - price * 0.15;
                            }
                            break;
                        case "Business":
                            price = 16 * num;
                            if (num >= 100) {
                                price = price - (16 * 10);
                            }
                            break;
                        case "Regular":
                            price = 22.50 * num;
                            if (num >= 10 && num <= 20) {
                                price = price - price * 0.05;
                            }
                            break;
            default:
                break;
        }
        break;
   }  
console.log(`Total price: ${price.toFixed(2)}`);
}
solve(40,
    "Regular",
    "Saturday"
    );