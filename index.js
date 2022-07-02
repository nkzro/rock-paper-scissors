let computerSelection;
let playerSelection;

function getRandomInt() {
    return Math.ceil(Math.random() * 3);
}

function computerPlay() {
    let chance = getRandomInt();
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

function playerPlay() {
    return playerSelection;
}

function playRound(computerSelection, playerSelection) {
    if(playerSelection === computerSelection) {
        return "That's a tie!"
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats Rock";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beat Paper";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats Scissors";
    }
    else if (computerSelection === "rock" && playerSelection === "paper") {
        return "You win! Paper beats Rock";
    }
    else if (computerSelection === "paper" && playerSelection === "scissors") {
        return "You win! Scissors beat Paper";
    }
    else if (computerSelection === "scissors" && playerSelection === "rock") {
        return "You win! Rock beats Scissors";
    }
}


function game() {
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < 5 && computerScore < 5) {
        computerSelection = computerPlay();
        console.log(computerSelection);
        playerSelection = playerPlay();
        let play = playRound(computerSelection, playerSelection)
        console.log(play);

        if (play.includes("win")) {
            playerScore++;
        }
        else if (play.includes("lose")) {
            computerScore++;
        }

        console.log(playerScore + ', ' + computerScore);
    }

    if (playerScore === 5) {
        return "You win the game!"
    }
    else if (computerScore === 5) {
        return "You lose the game!"
    }
}




/**Manipulating the DOM */
let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');

rock.addEventListener('click', function(e) {
    playerSelection = this.id;
});

paper.addEventListener('click', function(e) {
    playerSelection = this.id;
});

scissors.addEventListener('click', function(e) {
    playerSelection = this.id;
});

rock.addEventListener('click', function (e) {
    console.log(this.id)           // logs the className of my_element
    console.log(e.currentTarget === this) // logs `true`
  })
  