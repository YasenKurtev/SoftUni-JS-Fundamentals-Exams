function counterStrike(arr) {

    let energy = Number(arr[0]);
    let wins = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === "End of battle") {
            console.log(`Won battles: ${wins}. Energy left: ${energy}`);
            break;
        }
        if (energy >= Number(arr[i])) {
            wins++;
            if (wins % 3 === 0) {
                energy += wins;
            }
            energy -= Number(arr[i]);
        } else {
            console.log(`Not enough energy! Game ends with ${wins} won battles and ${energy} energy`);
            break;
        }
    }
}

counterStrike(["100",
"10",
"10",
"10",
"1",
"2",
"3",
"63",
"10"])




