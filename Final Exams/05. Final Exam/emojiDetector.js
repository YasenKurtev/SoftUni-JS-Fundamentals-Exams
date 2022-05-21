function emojiDetector(arr) {

    let string = arr.shift();
    let threshold = 1;
    let emojiCount = 0;
    let emojiArr = [];
    let regex = /(\:{2}|\*{2})(?<emoji>[A-Z][a-z]{2,})\1/g;

    for (let char of string) {
        if (char.charCodeAt() >= 48 && char.charCodeAt() <= 57) {
            threshold *= char;
        }
    }

    /*  
        let numsArr = [];
    
        for (let char of string) {
            if (char.charCodeAt() >= 48 && char.charCodeAt() <= 57) {
                numsArr.push(Number(char));
            }
        }
    
        let threshold = numsArr.reduce((a, b) => a * b);
    */

    while ((valid = regex.exec(string)) !== null) {
        let validEmoji = valid.groups.emoji;
        emojiCount++;
        let coolCount = 0;
        for (let i = 0; i < validEmoji.length; i++) {
            let num = Number(validEmoji.charCodeAt(i));
            coolCount += num;
        }
        if (coolCount >= threshold) {
            emojiArr.push(valid[0]);
        }
    }

    console.log(`Cool threshold: ${threshold}`);
    console.log(`${emojiCount} emojis found in the text. The cool ones are:`);
    for (let el of emojiArr) {
        console.log(el);
    }

}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])