function examPrep(input) {
let badGrades = 0;
let taskName = "";
let grade = 0;
let index = 0;
let averageScore = 0;
let gradeNumber = 0;
while(index <= input.length) {
    const item = input[index];
    index++
    if (typeof input[index] === 'number') {
        grade = Number(input[index]);
        gradeNumber++
        averageScore += grade;
    }
    if (input[index] === "Enough") {
        console.log(`Average Score: ${averageScore}`);
        
    }
}


} examPrep(["3","Money","6","Story","4","Spring Time","5","Bus","6","Enough"])
    