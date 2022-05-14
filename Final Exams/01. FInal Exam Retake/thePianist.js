function thePianist(arr) {

    let pieces = {};
    let num = Number(arr.shift());

    for (let i = 0; i < num; i++) {
        let tokens = arr.shift().split('|');
        let piece = tokens[0];
        let composer = tokens[1];
        let key = tokens[2];
        if (!pieces.hasOwnProperty(piece)) {
            pieces[piece] = [];
            pieces[piece].push(composer);
            pieces[piece].push(key);
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "Stop") {
            break;
        }
        let tokens = arr[i].split('|');
        let command = tokens[0];
        if (command === "Add") {
            let piece = tokens[1];
            let composer = tokens[2];
            let key = tokens[3];
            if (!pieces.hasOwnProperty(piece)) {
                pieces[piece] = [];
                pieces[piece].push(composer);
                pieces[piece].push(key);
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            } else {
                console.log(`${piece} is already in the collection!`);
            }
        } else if (command === "Remove") {
            let piece = tokens[1];
            if (pieces.hasOwnProperty(piece)) {
                delete pieces[piece];
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        } else if (command === "ChangeKey") {
            let piece = tokens[1];
            let newKey = tokens[2];
            if (pieces.hasOwnProperty(piece)) {
                pieces[piece][1] = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
    }

    for (let key of Object.keys(pieces)) {
        console.log(`${key} -> Composer: ${pieces[key][0]}, Key: ${pieces[key][1]}`);
    }
}

thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
])