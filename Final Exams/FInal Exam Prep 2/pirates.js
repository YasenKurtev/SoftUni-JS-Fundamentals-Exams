function pirates(arr) {

    let cities = {};

    for (let i = 0; i < arr.length; i++) {
        let current = arr.shift();
        if (current === "Sail") {
            break;
        }
        let tokens = current.split("||");
        let city = tokens[0];
        let population = Number(tokens[1]);
        let gold = Number(tokens[2]);
        if (!cities.hasOwnProperty(city)) {
            cities[city] = [];
            cities[city].push(population);
            cities[city].push(gold);
        } else {
            cities[city][0] += population;
            cities[city][1] += gold;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "End") {
            break;
        }
        let tokens = arr[i].split('=>');
        let command = tokens[0];
        let city = tokens[1];
        if (command === "Plunder") {
            let people = Number(tokens[2]);
            let gold = Number(tokens[3]);
            cities[city][0] -= people;
            cities[city][1] -= gold;
            console.log(`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`);
            if (cities[city][0] === 0 || cities[city][1] === 0) {
                console.log(`${city} has been wiped off the map!`);
                delete cities[city];
            }
        } else if (command === "Prosper") {
            let gold = Number(tokens[2]);
            if (gold >= 0) {
                cities[city][1] += gold;
                console.log(`${gold} gold added to the city treasury. ${city} now has ${cities[city][1]} gold.`);
            } else {
                console.log("Gold added cannot be a negative number!");
            }
        }
    }

    if (Object.keys(cities).length > 0) {
        console.log(`Ahoy, Captain! There are ${Object.keys(cities).length} wealthy settlements to go to:`);
        for (let key of Object.keys(cities)) {
            let city = key;
            let population = cities[key][0];
            let gold = cities[key][1];
            console.log(`${city} -> Population: ${population} citizens, Gold: ${gold} kg`);
        }
    } else {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }
}

pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"])
