function plantDiscovery(arr) {

    let num = Number(arr.shift());
    let plants = {};

    for (let i = 0; i < num; i++) {
        let splited = arr.shift().split('<->');
        let plant = splited[0];
        let rarity = Number(splited[1]);
        if (!plants.hasOwnProperty(plant)) {
            plants[plant] = [];
            plants[plant].push(rarity);
        } else {
            plants[plant][0] = rarity;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "Exhibition") {
            break;
        }
        let splited = arr[i].split(': ');
        let command = splited[0];
        let tokens = splited[1].split(' - ');
        if (command === "Rate") {
            let plant = tokens[0];
            let rating = Number(tokens[1]);
            if (!plants.hasOwnProperty(plant)) {
                console.log("error");
            } else {
                plants[plant].push(rating);
            }
        } else if (command === "Update") {
            let plant = tokens[0];
            let rarity = Number(tokens[1]);
            if (!plants.hasOwnProperty(plant)) {
                console.log("error");
            } else {
                plants[plant][0] = rarity;
            }
        } else if (command === "Reset") {
            let plant = tokens[0];
            if (!plants.hasOwnProperty(plant)) {
                console.log("error");
            } else {
                plants[plant].splice(1, plants[plant].length - 1);
            }
        }
    }

    console.log("Plants for the exhibition:");

    for (let key of Object.keys(plants)) {
        let totalRating = 0;
        let count = 0;
        for (let i = 1; i < plants[key].length; i++) {
            totalRating += plants[key][i];
            count++;
        }
        let averageRating = totalRating / count;
        if (plants[key].length === 1) {
            console.log(`- ${key}; Rarity: ${plants[key][0]}; Rating: 0.00`);
        } else {
            console.log(`- ${key}; Rarity: ${plants[key][0]}; Rating: ${averageRating.toFixed(2)}`);
        }
    }
}

plantDiscovery(["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"])


