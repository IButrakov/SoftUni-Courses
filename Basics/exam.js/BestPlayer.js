function bestPlayer(input) {

let playerName = "";
let goalScored = 0;
let index = 0;
let bestPlayer = "";
let mostGoals = 0;
while (input[index] !== "END" && index < input.length) {
    playerName = input[index];
    goalScored = Number(input[index + 1]);
    if (goalScored > mostGoals) {
        mostGoals = goalScored;
        bestPlayer = playerName;
    }
    index +=2;
}
console.log(`${bestPlayer} is the best player!`);
if(mostGoals >= 3) {
    console.log(`He has scored ${mostGoals} goals and made a hat-trick !!!`);    
} else {
    console.log(`He has scored ${mostGoals} goals.`);
    
}

}
bestPlayer(["Neymar","2","Ronaldo","1","Messi","3","END"]);