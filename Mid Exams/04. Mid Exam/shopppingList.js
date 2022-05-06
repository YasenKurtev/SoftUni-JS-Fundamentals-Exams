function shoppingList(arr){

    let productsArr = arr[0].split('!');

    for(let i = 1; i <= arr.length; i++){
        let command = arr[i];
        if(command === "Go Shopping!"){
            break;
        }else{
            let commandArr = arr[i].split(' ');
            if(commandArr[0] === "Urgent"){
                if(productsArr.includes(commandArr[1])){
                    continue;
                }else{
                    productsArr.unshift(commandArr[1]);
                }
            }else if(commandArr[0] === "Unnecessary"){
                if(productsArr.includes(commandArr[1])){
                    productsArr.splice(productsArr.indexOf(commandArr[1]), 1);
                }
            }else if(commandArr[0] === "Correct"){
                if(productsArr.includes(commandArr[1])){
                    productsArr[productsArr.indexOf(commandArr[1])] = commandArr[2];
                }
            }else if(commandArr[0] === "Rearrange"){
                if(productsArr.includes(commandArr[1])){
                    productsArr.push(commandArr[1]);
                    productsArr.splice(productsArr.indexOf(commandArr[1]), 1);
                }
            }
        }

    }

    console.log(productsArr.join(', '));

}

shoppingList(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])
