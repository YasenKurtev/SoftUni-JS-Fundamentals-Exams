function messageTranslator(arr) {

    let count = Number(arr.shift());
    let regex = /\!(?<command>[A-Z][a-z]{2,})\!\:\[(?<string>[A-Za-z]{8,})\]/gm;

    for (let i = 0; i < count; i++) {
        if ((valid = regex.exec(arr[i])) !== null) {
            let command = valid.groups.command;
            let string = valid.groups.string;
            let nums = [];
            for (let i = 0; i < string.length; i++) {
                if ((string.charCodeAt(i) >= 65 &&
                    string.charCodeAt(i) <= 90) ||
                    (string.charCodeAt(i) >= 97 &&
                        string.charCodeAt(i) <= 122)) {
                    let num = string.charCodeAt(i);
                    nums.push(num);
                }
            }
            console.log(`${command}: ${nums.join(' ')}`);
        } else {
            console.log("The message is invalid");
        }
    }
}

messageTranslator(["3",
    "go:[outside]",
    "!drive!:YourCarToACarWash",
    "!Watch!:[LordofTheRings]"])

