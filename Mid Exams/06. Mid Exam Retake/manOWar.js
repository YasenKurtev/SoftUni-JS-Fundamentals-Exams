function manOWar(arr) {

    let pirateShip = arr[0].split('>').map(Number);
    let warShip = arr[1].split('>').map(Number);
    let maxHealth = Number(arr[2]);
    let isSunken = false;

    for (let i = 3; i < arr.length; i++) {
        if (arr[i] === "Retire") {
            break;
        }
        let command = arr[i].split(' ');
        switch (command[0]) {
            case "Fire":
                let indexWarShip = Number(command[1]);
                let damageWarShip = Number(command[2]);
                if (indexWarShip >= 0 && indexWarShip <= warShip.length - 1) {
                    warShip[indexWarShip] -= damageWarShip;
                    if (warShip[indexWarShip] <= 0) {
                        console.log("You won! The enemy ship has sunken.");
                        isSunken = true;
                        break;
                    }
                }
                break;
            case "Defend":
                let start = Number(command[1]);
                let end = Number(command[2]);
                let damagePirateShip = Number(command[3]);
                if ((start >= 0 && start <= pirateShip.length - 1) && (end <= pirateShip.length - 1 && end > start)) {
                    for (let j = start; j <= end; j++) {
                        pirateShip[j] -= damagePirateShip;
                        if (pirateShip[j] <= 0) {
                            console.log("You lost! The pirate ship has sunken.");
                            isSunken = true;
                            break;
                        }
                    }
                }
                break;
            case "Repair":
                let indexPirateShip = Number(command[1]);
                let health = Number(command[2]);
                if (indexPirateShip >= 0 && indexPirateShip <= pirateShip.length - 1) {
                    pirateShip[indexPirateShip] += health;
                    if (pirateShip[indexPirateShip] > maxHealth) {
                        pirateShip[indexPirateShip] = maxHealth;
                    }
                }
                break;
            case "Status":
                let repairCount = 0;
                for (let k = 0; k < pirateShip.length; k++) {
                    if (pirateShip[k] / maxHealth * 100 < 20) {
                        repairCount++;
                    }
                }
                console.log(`${repairCount} sections need repair.`);
                break;
        }
    }
    if (isSunken === false) {
        let pirateShipStatus = pirateShip.reduce((a, b) => a + b, 0);
        let warShipStatus = warShip.reduce((a, b) => a + b, 0);
        console.log(`Pirate ship status: ${pirateShipStatus}`);
        console.log(`Warship status: ${warShipStatus}`);
    }
}

manOWar(["12>13>11>20>66",
"12>22>33>44>55>32>18",
"70",
"Fire 2 11",
"Fire 8 100",
"Defend 3 6 11",
"Defend 0 3 5",
"Repair 1 33",
"Status",
"Retire"])