function mirrorWords(arr) {

    let string = arr[0];
    let regex = /(#|@)(?<firstWord>[A-Za-z]{3,})\1{2}(?<secondWord>[A-Za-z]{3,})\1/g;
    let count = 0;
    let pairsArr = [];

    while ((pairs = regex.exec(string)) !== null) {
        count++;
        let word1 = pairs.groups.firstWord;
        let word2 = pairs.groups.secondWord;
        let reversed = '';
        for (let i = word2.length - 1; i >= 0; i--) {
            reversed += word2[i];
        }
        if (word1 === reversed) {
            pairsArr.push(`${word1} <=> ${word2}`);
        }
    }

    if (count === 0) {
        console.log("No word pairs found!");
        console.log("No mirror words!");
    } else {
        console.log(`${count} word pairs found!`);
        if (pairsArr.length === 0) {
            console.log("No mirror words!");
        } else {
            console.log("The mirror words are:");
            console.log(pairsArr.join(', '));
        }
    }
}

mirrorWords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##trap##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAS#r#@w1r	'])