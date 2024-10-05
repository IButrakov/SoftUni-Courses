function hotel(input) {
    let month = input[0];
    let nights = Number(input[1]);
    let studioPrice;
    let apartmentPrice;

    switch(month) {
        case "May":
        case "October":
            studioPrice = nights * 50;
            apartmentPrice = nights * 65;
            if(nights > 14) {
                studioPrice *= 0.70;
                apartmentPrice *= 0.90;
            } else if(nights > 7) {
                studioPrice *= 0.95;
            }
            break;
        case "June":
        case "September":
            studioPrice = nights * 75.20;
            apartmentPrice = nights * 68.70;
            if(nights > 14) {
                studioPrice *= 0.80;
                apartmentPrice *= 0.90;
            }
            break;
        case "July":
        case "August":
            studioPrice = nights * 76;
            apartmentPrice = nights * 77;
            if(nights > 14) {
                apartmentPrice *= 0.90;
            }
            break;
    return;
    }

    console.log(`Apartment: ${(apartmentPrice).toFixed(2)} lv.`);
    console.log(`Studio: ${(studioPrice).toFixed(2)} lv.`);
}

hotel(["August", "20"]);