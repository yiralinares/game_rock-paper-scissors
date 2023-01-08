const computerChoiceDisplay = document.getElementById ('computer__choice');
const userChoiceDisplay = document.getElementById ('user__choice');
const resultDisplay = document.getElementById ('results__display');
const possibleChoices = document.querySelectorAll ('button');

//Variables:

let userChoice;
let computerChoice;
let result;

//UserChoice

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

//ComputerChoice
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() *3);
    if (randomNumber === 0) {
        computerChoice = 'rock'
    }
    if (randomNumber === 1) {
        computerChoice = 'paper'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

//ResultDisplay

function getResult() {
    if (computerChoice === userChoice) {
        result = "It's a draw!"
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'You won!'
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'You won!'
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'You won!'
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'You lost!' 
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'You lost!' 
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'You lost!' 
    }

    resultDisplay.innerHTML = result
}

