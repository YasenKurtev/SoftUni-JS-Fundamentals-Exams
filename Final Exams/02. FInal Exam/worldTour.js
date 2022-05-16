function worldTour(arr) {

    let stops = arr.shift();

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "Travel") {
            break;
        }
        let tokens = arr[i].split(':');
        let command = tokens[0];
        if (command === "Add Stop") {
            let index = Number(tokens[1]);
            let string = tokens[2];
            if (index >= 0 && index < stops.length) {
                let first = stops.substring(0, index);
                let second = stops.substring(index, stops.length);
                stops = first + string + second;
            }
            console.log(stops);
        } else if (command === "Remove Stop") {
            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);
            if (startIndex >= 0 && startIndex < stops.length && endIndex >= 0 && endIndex < stops.length) {
                let removed = stops.substring(startIndex, endIndex + 1);
                stops = stops.replace(removed, '');
            }
            console.log(stops);
        } else if (command === "Switch") {
            let oldString = tokens[1];
            let newString = tokens[2];
            if (stops.includes(oldString)) {
                stops = stops.replace(oldString, newString);
            }
            console.log(stops);
        }
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`);
}

worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])
