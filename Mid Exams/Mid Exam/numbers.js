function numbers(arr) {

    let numsSequence = arr.shift().split(' ').map(Number);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "Finish") {
            console.log(numsSequence.join(' '));
            break;
        }
        let command = arr[i].split(' ');
        let operation = command[0];
        let value = Number(command[1]);
        if (operation === "Add") {
            numsSequence.push(value);
        } else if (operation === "Remove") {
            let index = numsSequence.indexOf(value);
            for (let element of numsSequence) {
                if (element === value) {
                    numsSequence.splice(index, 1);
                    break;
                }
            }
        } else if (operation === "Replace") {
            let replacement = Number(command[2]);
            let index = numsSequence.indexOf(value);
            for (let element of numsSequence) {
                if (element === value) {
                    numsSequence[index] = replacement;
                    break;
                }
            }
        } else if (operation === "Collapse") {
            for (let i = 0; i < numsSequence.length; i++) {
                if (numsSequence[i] < value) {
                    numsSequence.splice(i, 1);
                    i -= 1;
                }
            }
/*            for (let element of numsSequence) {
                if (element < value) {
                    let index = numsSequence.indexOf(element);
                    numsSequence.splice(index, 1);
                    element--;
                }
            }*/
        }
    }
}

numbers(["5 9 70 -56 9 9",
    "Replace 9 10",
    "Remove 9",
    "Collapse 10",
    "Finish"])


