function Break(input) {
    let Series = input[0];
    let EpisodeLength = Number(input[1]);
    let Break = Number(input[2]);

    let LunchTime = Break * 0.125;
    let RestTime = Break * 0.25;
    let RemainingTime = Break - LunchTime - RestTime;

    if (RemainingTime >= EpisodeLength) {
        let TimeLeft = RemainingTime - EpisodeLength;
        console.log(`You have enough time to watch ${Series} and left with ${Math.ceil(TimeLeft)} minutes free time.`);
    } else {
        let TimeNeeded = EpisodeLength - RemainingTime;
        console.log(`You don't have enough time to watch ${Series}, you need ${Math.ceil(TimeNeeded)} more minutes.`);
    }
}

Break(["Teen Wolf", "48", "60"]);
