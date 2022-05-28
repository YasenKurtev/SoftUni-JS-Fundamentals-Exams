function decryptingCommands(arr) {

    let string = arr.shift();

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "Finish") {
            break;
        }
        let tokens = arr[i].split(' ');
        let command = tokens[0];
        if (command === "Replace") {
            let currentChar = tokens[1];
            let newChar = tokens[2];
            while (string.includes(currentChar)) {
                string = string.replace(currentChar, newChar);
            }
            console.log(string);
        } else if (command === "Cut") {
            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);
            if (string[startIndex] !== undefined && string[endIndex] !== undefined) {
                let substring = string.substring(startIndex, endIndex + 1);
                string = string.replace(substring, '');
                console.log(string);
            } else {
                console.log("Invalid indices!");
            }
        } else if (command === "Make") {
            let type = tokens[1];
            if (type === "Upper") {
                string = string.toUpperCase();
            } else if (type === "Lower") {
                string = string.toLowerCase();
            }
            console.log(string);
        } else if (command === "Check") {
            let substring = tokens[1];
            if (string.includes(substring)) {
                console.log(`Message contains ${substring}`);
            } else {
                console.log(`Message doesn't contain ${substring}`);
            }
        } else if (command === "Sum") {
            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);
            if (string[startIndex] !== undefined && string[endIndex] !== undefined) {
                let substring = string.substring(startIndex, endIndex + 1);
                let sum = 0;
                for (let i = 0; i < substring.length; i++) {
                    let num = substring.charCodeAt(i);
                    sum += num;
                }
                console.log(sum);
            } else {
                console.log("Invalid indices!");
            }
        }
    }
}

decryptingCommands(["HappyNameDay",
    "Replace p r",
    "Make Lower",
    "Cut 2 23",
    "Sum -2 2",
    "Finish"])

