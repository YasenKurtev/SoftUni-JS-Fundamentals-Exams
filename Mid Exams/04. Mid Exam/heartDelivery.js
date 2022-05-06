function heartDelivery(arr) {

    let hoodArr = arr[0].split('@');
    let currentHousePosition = 0;
    let successfulHouses = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === "Love!") {
            break;
        }

        let commandArr = arr[i].split(' ');
        let jumpsCount = Number(commandArr[1]);

        currentHousePosition += jumpsCount;

        if (currentHousePosition > hoodArr.length - 1) {
            currentHousePosition = 0;
        }

        if(hoodArr[currentHousePosition] === 0){
            console.log(`Place ${currentHousePosition} already had Valentine's day.`);
        }else{
            hoodArr[currentHousePosition] -= 2;
            if(hoodArr[currentHousePosition] === 0){
                console.log(`Place ${currentHousePosition} has Valentine's day.`);
                successfulHouses++;
            }
        }
    }
    console.log(`Cupid's last position was ${currentHousePosition}.`);
    if(hoodArr.length - successfulHouses === 0){
        console.log(`Mission was successful.`);
    }else{
        console.log(`Cupid has failed ${hoodArr.length - successfulHouses} places.`);
    }
}

heartDelivery(["10@10@10@2",
"Jump 1",
"Jump 2",
"Love!"])


