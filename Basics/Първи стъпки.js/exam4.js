function Literature(input) {

    let Pages = Number(input[0]);
    let PagesPerHour = Number(input[1]);
    let Days = Number(input[2]);
    let TimeNeeded = Pages / PagesPerHour;
    let HoursPerDay = TimeNeeded / Days; 

console.log (HoursPerDay);


}
Literature(["212" , "20" , "2"]);