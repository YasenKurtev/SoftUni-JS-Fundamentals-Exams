function needForSpeed(arr) {

    let carsCount = Number(arr.shift());

    let cars = {};

    for (let i = 0; i < carsCount; i++) {
        let tokens = arr.shift().split('|');
        let car = tokens[0];
        let mileage = Number(tokens[1]);
        let fuel = Number(tokens[2]);
        cars[car] = [];
        cars[car].push(mileage);
        cars[car].push(fuel);
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "Stop") {
            break;
        }
        let tokens = arr[i].split(' : ');
        let command = tokens[0];
        if (command === "Drive") {
            let car = tokens[1];
            let distance = Number(tokens[2]);
            let fuel = Number(tokens[3]);
            if (cars[car][1] < fuel) {
                console.log("Not enough fuel to make that ride");
            } else {
                cars[car][0] += distance;
                cars[car][1] -= fuel;
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                if (cars[car][0] >= 100000) {
                    delete cars[car];
                    console.log(`Time to sell the ${car}!`);
                }
            }
        } else if (command === "Refuel") {
            let car = tokens[1];
            let fuel = Number(tokens[2]);
            let diff = 75 - cars[car][1];
            cars[car][1] += fuel;
            if (cars[car][1] > 75) {
                cars[car][1] = 75;
                console.log(`${car} refueled with ${diff} liters`);
            } else {
                console.log(`${car} refueled with ${fuel} liters`);
            }
        } else if (command === "Revert") {
            let car = tokens[1];
            let kilometers = Number(tokens[2]);
            cars[car][0] -= kilometers;
            if (cars[car][0] < 10000) {
                cars[car][0] = 10000;
            } else {
                console.log(`${car} mileage decreased by ${kilometers} kilometers`);
            }
        }
    }

    for (let key of Object.keys(cars)) {
        console.log(`${key} -> Mileage: ${cars[key][0]} kms, Fuel in the tank: ${cars[key][1]} lt.`);
    }
}

needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
])
