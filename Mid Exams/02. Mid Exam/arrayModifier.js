function arrayModifier(arr) {

    let numsArr = arr[0].split(' ');

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === "decrease") {
            for (let i = 0; i < numsArr.length; i++) {
                numsArr[i] -= 1;
            }
        } else if (arr[i] === "end") {
            break;
        } else {
            let commandArr = arr[i].split(' ');
            if (commandArr[0] === "swap") {
                let temp = numsArr[commandArr[1]];
                numsArr[commandArr[1]] = numsArr[commandArr[2]];
                numsArr[commandArr[2]] = temp;
            } else if (commandArr[0] === "multiply") {
                numsArr[commandArr[1]] *= numsArr[commandArr[2]];
            }

        }
    }

    console.log(numsArr.join(', '));

}

arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ]
  
)