function onTime(input) {

let examHour = Number(input[0]);
let examMinute = Number(input[1]);
let arivalHour = Number(input[2]);
let arivalMinute = Number(input[3]);
let timeDifference;
let hours = 0;
let minutes;
let examTimeInMinutes = examHour * 60 + examMinute;
let arivalTimeInMinutes = arivalHour * 60 + arivalMinute;
if(arivalTimeInMinutes > examTimeInMinutes) {
    timeDifference = arivalTimeInMinutes - examTimeInMinutes;
    console.log("Late");
    if(timeDifference < 60) {
        console.log(`${timeDifference} minutes after the start`);
    } else if(timeDifference >= 60) {
        hours += Math.floor(timeDifference / 60);
        minutes = timeDifference % 60;
        console.log(`${hours} : ${minutes < 10 ? '0' + minutes : minutes} hours after the start`)
    }
    
} else if(arivalTimeInMinutes < examTimeInMinutes) {
    timeDifference = examTimeInMinutes - arivalTimeInMinutes;
    if(timeDifference <= 30 ) {
        console.log("On time");
        console.log(`${timeDifference} minutes before the start`);
    } else if (timeDifference < 60) {
        console.log("Early");
        console.log(`${timeDifference} minutes before the start`);
    } else if(timeDifference >= 60) {
        hours += Math.floor(timeDifference / 60);
        minutes = timeDifference % 60;
        console.log("Early")
        console.log(`${hours} : ${minutes < 10 ? '0' + minutes : minutes} hours before the start`)
    }
    
} else if(arivalTimeInMinutes === examTimeInMinutes) {
    console.log("On time")
}
}
onTime(["11","30","12","29"]);