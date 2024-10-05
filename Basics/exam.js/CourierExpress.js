function courierExpress(input) {
    
let weight = Number(input[0]);
let deliveryType = input[1];
let distance = Number(input[2]);
let pricePerDistance = 0;
switch(deliveryType) {
    case "standard":
        if (weight < 1) {
            pricePerDistance = 0.03;
        }else if (weight >= 1 && weight < 10) {
            pricePerDistance = 0.05;         
        }else if (weight >= 10 && weight < 40) {
            pricePerDistance = 0.10;
        }else if (weight >= 40 && weight < 90) {
            pricePerDistance = 0.15;
        }else if (weight >= 90 && weight < 150) {
            pricePerDistance = 0.20;
        }
    break;
    case "express": 
    if (weight < 1) {
        pricePerDistance = 0.03;
        pricePerDistance += pricePerDistance * 0.80 * weight;          
    }else if (weight >= 1 && weight < 10) {
        pricePerDistance = 0.05;
        pricePerDistance += pricePerDistance * 0.40 * weight;          
    }else if (weight >= 10 && weight < 40) {
        pricePerDistance = 0.10;
        pricePerDistance += pricePerDistance * 0.05 * weight;
    }else if (weight >= 40 && weight < 90) {
        pricePerDistance = 0.15;
        pricePerDistance += pricePerDistance * 0.02 * weight;
    }else if (weight >= 90 && weight < 150) {
        pricePerDistance = 0.20;
        pricePerDistance += pricePerDistance * 0.01 * weight;          
    }
    break;
}
let totalCost = pricePerDistance * distance;
console.log(`The delivery of your shipment with weight of ${(weight).toFixed(3)} kg. would cost ${(totalCost).toFixed(2)} lv.`);
}
courierExpress(["87","express","130"]);