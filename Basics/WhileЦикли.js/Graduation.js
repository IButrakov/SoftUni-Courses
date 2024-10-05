function graduation(input) {

let name = input[0];
let index = 1;
let gradesScore = 0;
let gradesCounter = 0;
let grades = Number(input[index]);
while (index < input.length) {
    gradesScore += grades;
    gradesCounter++;
    index++;
    let totalGrades = gradesScore / gradesCounter;
    if (grades <= 2) {
        console.log(`${name} has been excluded at ${gradesCounter} grade`);
    } else if (totalGrades >= "4"){
        console.log(`${name} graduated. Average grade: ${(totalGrades).toFixed(2)}`);
    }
}
}
graduation(["Mimi", "5", "6", "5","6","5","6","6","2","3"]);