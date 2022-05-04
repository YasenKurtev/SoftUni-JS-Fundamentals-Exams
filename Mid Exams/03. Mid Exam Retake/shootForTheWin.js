function shootForTheWin(arr){

    let targetsArr = arr[0].split(' ').map(Number);
    let shotTargets = 0;
    for(let i = 1; i < arr.length; i++){
        if(arr[i] === "End"){
            console.log(`Shot targets: ${shotTargets} -> ${targetsArr.join(' ')}`);
        }
        let index = Number(arr[i]);
        if(index > targetsArr.length-1 || targetsArr[index] === -1){
            continue;
        }else{
            let temp = targetsArr[index];
            targetsArr[index] = -1;
            shotTargets++;
            for(let j = 0; j < targetsArr.length; j++){
                if(targetsArr[j] === -1){
                    continue;
                }else{
                    if(targetsArr[j] > temp){
                        targetsArr[j] -= temp;
                    }else if(targetsArr[j] <= temp){
                        targetsArr[j] += temp;
                    }
                }
            }
        }
    }

}

shootForTheWin(["30 30 12 60 54 66",
"5",
"2",
"4",
"0",
"End"])

