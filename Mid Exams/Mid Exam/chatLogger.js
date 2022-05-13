function chatLogger(arr) {

    let chatArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "end") {
            console.log(chatArr.join('\n'));
            break;
        }
        let command = arr[i].split(' ');
        let operation = command[0];
        if (operation === "Chat") {
            let message = command[1];
            chatArr.push(message);
        } else if (operation === "Delete") {
            let message = command[1];
            if (chatArr.includes(message)) {
                let index = chatArr.indexOf(message);
                chatArr.splice(index, 1);
            }
        } else if (operation === "Edit") {
            let message = command[1];
            let edited = command[2];
            if (chatArr.includes(message)) {
                let index = chatArr.indexOf(message);
                chatArr.splice(index, 1, edited);
            }
        } else if (operation === "Pin") {
            let message = command[1];
            if (chatArr.includes(message)) {
                let index = chatArr.indexOf(message);
                chatArr.splice(index, 1);
                chatArr.push(message);
            }
        } else if (operation === "Spam") {
            for (let i = 1; i < command.length; i++) {
                let message = command[i];
                chatArr.push(message);
            }
        }
    }
}

chatLogger(["Chat John",
    "Spam Let's go to the zoo",
    "Edit zoo cinema",
    "Chat tonight",
    "Pin John",
    "end"])



