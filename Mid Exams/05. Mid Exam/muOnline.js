function muOnline(string) {

    let roomArr = string.split('|');
    let health = 100;
    let bitcoins = 0;
    let isDead = false;

    for (let i = 0; i < roomArr.length; i++) {
        let command = roomArr[i].split(' ');
        switch (command[0]) {
            case 'potion':
                health += Number(command[1]);
                let diff = Math.abs(health - 100);
                if (health > 100) {
                    health = 100;
                    console.log(`You healed for ${command[1] - diff} hp.`);
                }else{
                    console.log(`You healed for ${command[1]} hp.`);
                }
                console.log(`Current health: ${health} hp.`);
                break;
            case 'chest':
                bitcoins += Number(command[1]);
                console.log(`You found ${command[1]} bitcoins.`);
                break;
            default:
                health -= command[1];
                if (health > 0) {
                    console.log(`You slayed ${command[0]}.`);
                } else {
                    console.log(`You died! Killed by ${command[0]}.`);
                    console.log(`Best room: ${i + 1}`);
                    isDead = true;
                }
        }
        if (isDead === true) {
            break;
        }
    }
    if (isDead === false) {
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }
}

muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")