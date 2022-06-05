function getRandomInt() {
    return Math.ceil(Math.random() * 3);
}



function computerPlay() {
    let chance = getRandomInt();
    console.log(chance);
    
    if (chance === 1) {
        return "rock";
    }
    else if (chance === 2) {
        return "paper";
    }
    else if (chance === 3) {
        return "scissors";
    }
}

console.log(computerPlay());