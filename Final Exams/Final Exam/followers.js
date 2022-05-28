function followers(arr) {

    let followers = {};

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "Log out") {
            break;
        }
        let tokens = arr[i].split(': ');
        let command = tokens[0];
        let username = tokens[1];
        if (command === "New follower") {
            if (!followers.hasOwnProperty(username)) {
                followers[username] = {};
                followers[username].likes = 0;
                followers[username].comments = 0;
            }
        } else if (command === "Like") {
            let count = Number(tokens[2]);
            if (!followers.hasOwnProperty(username)) {
                followers[username] = {};
                followers[username].likes = count;
                followers[username].comments = 0;
            } else {
                followers[username].likes += count;
            }
        } else if (command === "Comment") {
            if (!followers.hasOwnProperty(username)) {
                followers[username] = {};
                followers[username].likes = 0;
                followers[username].comments = 1;
            } else {
                followers[username].comments += 1;
            }
        } else if (command === "Blocked") {
            if (!followers.hasOwnProperty(username)) {
                console.log(`${username} doesn't exist.`);
            } else {
                delete followers[username];
            }
        }
    }

    let followersCount = Object.keys(followers).length;
    console.log(`${followersCount} followers`);

    for (let key of Object.keys(followers)) {
        console.log(`${key}: ${followers[key].likes + followers[key].comments}`);
    }
}

followers(["Blocked: Amy",
    "Comment: Amy",
    "New follower: Amy",
    "Like: Tom: 5",
    "Like: Ellie: 5",
    "Log out"])


