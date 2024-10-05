function Bonus(input) {
    let points = Number(input[0]);
    let bonus = 0;
    let totalBonus = 0;

    if (points <= 100) {
        bonus = 5;
    } else if (points > 100 && points < 1000) {
        bonus = points * 0.2;
    } else if (points >= 1000) { 
        bonus = points * 0.1;
    }

    totalBonus = bonus; 

    if (points % 2 === 0) {
        totalBonus += 1; 
    } else if (points % 10 === 5) {
        totalBonus += 2; 
    }

    console.log(totalBonus);
    console.log(points + totalBonus);
}
Bonus(["15875"]);