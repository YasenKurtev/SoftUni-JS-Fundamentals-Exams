function memoryGame(arr) {

    let seqArr = arr[0].split(' ');
    let movesCount = 0;

    for (let i = 1; i < arr.length; i++) {
        movesCount++;
        if (arr[i] === "end") {
            console.log("Sorry you lose :(");
            console.log(seqArr.join(' '));
            break;
        }
        let index = arr[i].split(' ');
        if (index[0] === index[1] || index[0] > seqArr.length - 1 ||
            index[1] > seqArr.length - 1 || index[0] < 0 ||
            index[1] < 0) {
            seqArr.splice(seqArr.length / 2, 0, `-${movesCount}a`);
            seqArr.splice(seqArr.length / 2, 0, `-${movesCount}a`);
            console.log("Invalid input! Adding additional elements to the board");
        }else{
            if(seqArr[index[0]] === seqArr[index[1]]){
                let match = seqArr[index[0]];
                console.log(`Congrats! You have found matching elements - ${seqArr[index[0]]}!`);
                seqArr.splice(seqArr.indexOf(match), 1);
                seqArr.splice(seqArr.indexOf(match), 1);
            }else if(seqArr[index[0]] !== seqArr[index[1]]){
                console.log("Try again!");
            }
        }
        if(seqArr.length === 0){
            console.log(`You have won in ${movesCount} turns!`);
            break;
        }
    }

}

memoryGame([
    "a 2 4 a 2 4", 
    "0 3", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
    ]
    )

