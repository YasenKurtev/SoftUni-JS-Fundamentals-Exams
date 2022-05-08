function inventory(arr) {

    let itemsArr = arr[0].split(', ');

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === "Craft!") {
            break;
        }

        let command = arr[i].split(' - ')

        switch (command[0]) {
            case 'Collect':
                if (!itemsArr.includes(command[1])) {
                    itemsArr.push(command[1]);
                }
                break;
            case 'Drop':
                if (itemsArr.includes(command[1])) {
                    itemsArr.splice(itemsArr.indexOf(command[1]), 1);
                }
                break;
            case 'Combine Items':
                let commandCombine = command[1].split(':');
                if (itemsArr.includes(commandCombine[0])) {
                    itemsArr.splice(itemsArr.indexOf(commandCombine[0]) + 1, 0, commandCombine[1]);
                }
                break;
            case 'Renew':
                if (itemsArr.includes(command[1])) {
                    itemsArr.splice(itemsArr.indexOf(command[1]), 1);
                    itemsArr.push(command[1]);
                }
                break;
        }
    }
    console.log(itemsArr.join(', '));
}

inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]
)