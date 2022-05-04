function movingTarget(arr) {

    let targetsArr = arr[0].split(' ').map(Number);

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === "End") {
            console.log(targetsArr.join('|'));
            break;
        }
        let command = arr[i].split(' ');
        let index = Number(command[1]);
        let value = Number(command[2]);
        switch (command[0]) {
            case 'Shoot':
                if (index >= 0 && index < targetsArr.length) {
                    targetsArr[index] -= value;
                }
                if (targetsArr[index] <= 0) {
                    targetsArr.splice(index, 1);
                }
                break;
            case 'Add':
                if (index >= 0 && index < targetsArr.length) {
                    targetsArr.splice(index, 0, value);
                } else {
                    console.log("Invalid placement!");
                }
                break;
            case 'Strike':
                if (index >= 0 && index - value >= 0 && index + value < targetsArr.length) {
                    let start = index - value;
                    let end = value + value + 1;
                    targetsArr.splice(start, end);
                } else {
                    console.log("Strike missed!");
                }
                break;
        }
    }
}

movingTarget(["1 2 3 4 5",
    "Strike 0 1",
    "End"])





