function numbers(string) {

    let arr = string.split(' ');
    let newArr = [];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
    }

    let average = Number((sum / arr.length).toFixed(2));

    while (arr.length > 0) {
        if (arr[0] > average) {
            newArr.push(arr[0])
        }
        arr = arr.slice(1);
    }

    if (newArr.length > 5) {
        while (newArr.length > 5) {
            let min = Math.min(...newArr);
            newArr = newArr.filter(e => e != min);
        }
        newArr.sort((a, b) => b - a);
        console.log(newArr.join(' '));
    } else if (newArr.length <= 5) {
        if (newArr.length === 0) {
            console.log("No");
        } else {
            newArr.sort((a, b) => b - a);
            console.log(newArr.join(' '));
        }
    }
}

numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')