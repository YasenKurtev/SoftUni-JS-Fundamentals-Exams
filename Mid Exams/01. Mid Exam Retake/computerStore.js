function computerStore(arr) {

    let sum = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        if (Number(arr[i] < 0)) {
            console.log(`Invalid price!`);
        } else {
            sum += Number(arr[i]);
        }
    }

    if (sum <= 0) {
        console.log(`Invalid order!`);
    } else {
        let tax = sum * 0.20;
        let finalPrice = sum + tax;

        if (arr[arr.length - 1] === 'special') {
            finalPrice = finalPrice * 0.90;
        }

        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${sum.toFixed(2)}$`);
        console.log(`Taxes: ${tax.toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${finalPrice.toFixed(2)}$`);
    }
}

computerStore([
    'regular'
    ])
    
    
