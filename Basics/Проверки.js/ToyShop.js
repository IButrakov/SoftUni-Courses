function Shop(input) {
    let Excursion = Number(input[0]);    
    let Jigsaw = 2.60;
    let Doll = 3.00;
    let Plush = 4.10;
    let Minion = 8.20;
    let Truck = 2.00;

    let jigsawCount = Number(input[1]);
    let dollCount = Number(input[2]);
    let plushCount = Number(input[3]);
    let minionCount = Number(input[4]);
    let truckCount = Number(input[5]);

    let TotalEarnings = jigsawCount * Jigsaw 
                      + dollCount * Doll 
                      + plushCount * Plush 
                      + minionCount * Minion 
                      + truckCount * Truck;
    let TotalToyCount = jigsawCount +dollCount +
                        plushCount + minionCount +
                        truckCount;                            
    if (TotalToyCount >= 50) {
        TotalEarnings = TotalEarnings * 0.75;
    }
    TotalEarnings = TotalEarnings * 0.90;
    if (TotalEarnings > Excursion) {
        let MoneyLeft = TotalEarnings - Excursion
        console.log("Yes! " + MoneyLeft.toFixed(2) + " lv left.")
    } else {
        let MoneyNeeded = Excursion - TotalEarnings
        console.log("Not enough money! " + MoneyNeeded.toFixed(2) + " lv needed.")
    }
    
}

Shop(["320", "8", "2", "5", "5", "1"]);
