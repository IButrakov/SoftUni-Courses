function salaryCalculator(input) {

let tabs = Number(input[0]);
let salary = Number(input[1]);
let penalties = {
    "Facebook": 150,
    "Instagram": 100,
    "Reddit": 50
};
for (let i = 2; i < input.length; i++) {
    let site = input[i];
    if (penalties[site]) {
        salary -= penalties[site];
    }
    if (salary <= 0) {
        console.log("You have lost your salary.");
        return;
    }
    
}
if (salary > 0) {
    console.log(salary);
}
}
salaryCalculator(["3",
    "500",
    "Github.com",
    "Stackoverflow.com",
    "softuni.bg"]);
    
    