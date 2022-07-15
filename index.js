const images = document.querySelectorAll('.image');
const result = document.querySelector('#result');
const player = document.querySelector('#player');
const computer = document.querySelector('#computer');
const restart = document.querySelector('#restart');
const playerImage = document.querySelector('#playerImage');
const computerImage = document.querySelector('#computerImage');

let playerScore = 0;
let computerScore = 0;

function getRandomInt() {
    return Math.ceil(Math.random() * 3);
}

function computerPlay() {
    let choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * choice.length)];
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        result.textContent = "That's a tie! You both chose " + playerSelection;
    }
    else if ((playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")) {
        
        result.textContent = "You lose! " + computerSelection + " beats " + playerSelection;
        computerScore++;
            if (computerScore === 5) {
                result.textContent = "You lost the game. Better luck next time.";
            }
        }
        else if ((computerSelection === "rock" && playerSelection === "paper") || 
        (computerSelection === "paper" && playerSelection === "scissors") ||
        (computerSelection === "scissors" && playerSelection === "rock")) {
            
            result.textContent = "You win! " + playerSelection + " beats " + computerSelection;
            playerScore++;
            if (playerScore === 5) {
                result.textContent = "Hooray, You win the game!";
            }
        }
        
        document.querySelector("#computerScore").textContent = computerScore;
        document.querySelector("#playerScore").textContent = playerScore;

        return;
}



/**Manipulating the DOM */
images.forEach(image => {
    image.addEventListener('click', (e) => {
        if (playerScore < 5 && computerScore < 5) {
            let playerSelection = e.target.id
            let computerSelection = computerPlay();
            playRound(playerSelection,computerSelection);

            playerImage.src = `./icons/${playerSelection}.png`;
            playerImage.style.display ='block';

            computerImage.src = `./icons/${computerSelection}.png`;
            computerImage.style.display ='block';
        }
    });
});

//Transform images when clicked
images.forEach(image => {
    image.addEventListener('mousedown', (e) => {
        image.classList.add('selected')
    })
    image.addEventListener('mouseup', (e) => {
        image.classList.remove('selected')
    })
})
