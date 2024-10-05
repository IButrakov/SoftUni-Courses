function Clock(input) {

let Hours = Number(input[0]);
let Minutes = Number(input[1]);
Minutes += 15;
 if (Minutes >= 60) {
    Hours += 1;
    Minutes -= 60; 
 }
 if (Hours >= 24) {
    Hours -= 24;
 }
 //let formattedMinutes = Minutes < 10 ? '0' + Minutes : Minutes;
if (Minutes < 10) {
    Minutes = "0" + Minutes;
} else {
    Minutes=Minutes
}
console.log(Hours + ":" + Minutes);

}
Clock(["0","55"]);