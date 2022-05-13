function burgerBus(arr) {

    let cityCount = Number(arr.shift());
    let currentCity = 0;
    let currentProfit = 0;
    let totalProfit = 0;

    for (let i = 1; i <= cityCount; i++) {
        currentCity = arr.splice(0, 3);
        let cityName = currentCity[0];
        let income = Number(currentCity[1]);
        let expenses = Number(currentCity[2]);
        if (i % 3 === 0 && i % 5 !== 0) {
            expenses += expenses * 0.50;
        }
        if (i % 5 === 0) {
            income -= income * 0.10;
        }
        currentProfit = income - expenses;
        totalProfit += currentProfit;
        console.log(`In ${cityName} Burger Bus earned ${currentProfit.toFixed(2)} leva.`);
    }
    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`);
}

burgerBus(["15",
    "Lille",
    "2226.00",
    "1200.60",
    "Rennes",
    "6320.60",
    "5460.20",
    "Reims",
    "600.20",
    "452.32",
    "Bordeaux",
    "6925.30",
    "2650.40",
    "Montpellier",
    "680.50",
    "290.20", "Lille",
    "2226.00",
    "1200.60",
    "Rennes",
    "6320.60",
    "5460.20",
    "Reims",
    "600.20",
    "452.32",
    "Bordeaux",
    "6925.30",
    "2650.40",
    "Montpellier",
    "680.50",
    "290.20", "Lille",
    "2226.00",
    "1200.60",
    "Rennes",
    "6320.60",
    "5460.20",
    "Reims",
    "600.20",
    "452.32",
    "Bordeaux",
    "6925.30",
    "2650.40",
    "Montpellier",
    "680.50",
    "290.20"])

