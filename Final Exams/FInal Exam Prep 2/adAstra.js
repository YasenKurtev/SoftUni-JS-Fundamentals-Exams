function adAstra(arr) {

    let regex = /(\||\#)(?<name>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/gm;
    let items = [];
    let totalCalories = 0;

    while ((validItems = regex.exec(arr[0])) !== null) {
        let name = validItems.groups.name;
        let date = validItems.groups.date;
        let calories = validItems.groups.calories;
        items.push(`Item: ${name}, Best before: ${date}, Nutrition: ${calories}`);
        totalCalories += Number(calories);
    }

    let days = Math.floor(totalCalories / 2000);

    console.log(`You have food to last you for: ${days} days!`);

    for (let item of items) {
        console.log(item);
    }
}

adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'])