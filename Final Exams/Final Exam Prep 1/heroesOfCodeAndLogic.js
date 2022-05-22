function heroesOfCodeAndLogic(arr) {

    let heroesCount = arr.shift();
    let heroes = {};

    for (let i = 0; i < heroesCount; i++) {
        let tokens = arr.shift().split(' ');
        let name = tokens[0];
        let hp = Number(tokens[1]);
        let mp = Number(tokens[2]);
        heroes[name] = [];
        heroes[name].push(hp);
        heroes[name].push(mp);
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "End") {
            break;
        }
        let tokens = arr[i].split(' - ');
        let command = tokens[0];
        let name = tokens[1];
        let amount = Number(tokens[2]);
        if (command === "CastSpell") {
            let spell = tokens[3];
            if (heroes[name][1] >= amount) {
                heroes[name][1] -= amount;
                let manaLeft = heroes[name][1];
                console.log(`${name} has successfully cast ${spell} and now has ${manaLeft} MP!`);
            } else {
                console.log(`${name} does not have enough MP to cast ${spell}!`);
            }
        } else if (command === "TakeDamage") {
            let attacker = tokens[3];
            heroes[name][0] -= amount;
            if (heroes[name][0] <= 0) {
                console.log(`${name} has been killed by ${attacker}!`);
                delete heroes[name];
            } else {
                console.log(`${name} was hit for ${amount} HP by ${attacker} and now has ${heroes[name][0]} HP left!`);
            }
        } else if (command === "Recharge") {
            let diff = Math.abs(heroes[name][1] - 200);
            heroes[name][1] += amount;
            if (heroes[name][1] > 200) {
                heroes[name][1] = 200;
                console.log(`${name} recharged for ${diff} MP!`);
            } else {
                console.log(`${name} recharged for ${amount} MP!`);
            }
        } else if (command === "Heal") {
            let diff = Math.abs(heroes[name][0] - 100);
            heroes[name][0] += amount;
            if (heroes[name][0] > 100) {
                heroes[name][0] = 100;
                console.log(`${name} healed for ${diff} HP!`);
            } else {
                console.log(`${name} healed for ${amount} HP!`);
            }
        }
    }

    for (let key of Object.keys(heroes)) {
        console.log(key);
        console.log(`  HP: ${heroes[key][0]}`);
        console.log(`  MP: ${heroes[key][1]}`);
    }
}

heroesOfCodeAndLogic([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
])