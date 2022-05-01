function theLift(arr){

    let wagonsArr = arr[1].split(' ').map(Number);
    let totalPeople = Number(arr[0]);
    let count = 0;

    for(let i = 0; i < wagonsArr.length; i++){
        if(totalPeople === 0){
            break;
        }
        if(totalPeople < 4){
            count = totalPeople;
        }else{
            count = 4 - wagonsArr[i];
        }
        wagonsArr[i] += count;
        totalPeople -= count;
    }

    if(totalPeople < 0){
        totalPeople = 0;
    }

    if(wagonsArr.includes(0) || wagonsArr.includes(1) ||
    wagonsArr.includes(2) || wagonsArr.includes(3)){
        console.log(`The lift has empty spots!`);
        console.log(wagonsArr.join(' '));
    }else if(totalPeople > 0){
        console.log(`There isn't enough space! ${totalPeople} people in a queue!`);
        console.log(wagonsArr.join(' '));
    }else if(totalPeople = 0 && !wagonsArr.includes(0) || !wagonsArr.includes(1) ||
    !wagonsArr.includes(2) || !wagonsArr.includes(3)){
        console.log(wagonsArr.join(' '));
    }
}

theLift([
    "20",
    "0 2 0"
   ])