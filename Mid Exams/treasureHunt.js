function treasureHunt(arr) {

    let initialLoot = arr[0].split('|');
    let stolenItems = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === "Yohoho!") {
            break;
        }
        let command = arr[i].split(' ');
        switch (command[0]) {
            case 'Loot':
                for (let j = 1; j < command.length; j++) {
                    if (!initialLoot.includes(command[j])) {
                        initialLoot.unshift(command[j]);
                    }
                }
                break;
            case 'Drop':
                if (typeof initialLoot[Number(command[1])] !== "undefined") {
                    let temp = initialLoot[Number(command[1])];
                    initialLoot.splice(Number(command[1]), 1);
                    initialLoot.push(temp)
                }
                break;
            case 'Steal':
                if (initialLoot.length < Number(command[1])) {
                    command[1] = initialLoot.length
                }
                for (let k = Number(command[1]); k > 0; k--) {
                    let temp1 = initialLoot[initialLoot.length - 1];
                    initialLoot.pop(initialLoot.length - 1);
                    stolenItems.unshift(temp1);
                }
                console.log(stolenItems.join(', '));
                stolenItems = [];
                break;
        }
    }

    if (initialLoot.length > 0) {
        let sum = 0;
        for (let f = 0; f < initialLoot.length; f++) {
            sum += initialLoot[f].length;
        }
        let averageGain = sum / initialLoot.length;
        console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);
    } else {
        console.log("Failed treasure hunt.");
    }
}

treasureHunt(["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"])

