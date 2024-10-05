function FishTank(input) {

let Lenght = Number(input[0]);
let Width = Number(input[1]);
let Height = Number(input[2]);
let Volume = Lenght * Width * Height;
let VolumeInLiters = Volume / 1000;
let SpaceTaken = Number(input[3]) / 100;
let LitersNeeded = VolumeInLiters * (1 - SpaceTaken)


console.log(LitersNeeded);

}
FishTank(["85","75","47","17"]);