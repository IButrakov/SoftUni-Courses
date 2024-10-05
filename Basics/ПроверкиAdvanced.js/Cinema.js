function cinema(input) {

let type = input[0];
let lines = Number(input[1]);
let columns = Number(input[2]);
let income = 0;
if(type === "Premiere") {
    let projection = 12.00
    let income = (lines * columns) * projection;
    console.log((income).toFixed(2));
} else if (type === "Normal") {
    let projection = 7.50
    let income = (lines * columns) * projection;
    console.log((income).toFixed(2));
} else if (type === "Discount") {
    let projection = 5;
    let income = (lines * columns) * projection;
    console.log((income).toFixed(2));
} else {
    console.log("error");
    }

}
cinema(["Discount","12","30"]);