

// // Para que funcionen los botones al hacer clic primero we must use the method getElementId('nameoftheid')
// const computerChoiceDisplay = document.getElementById ('computer-choice');
// const userChoiceDisplay = document.getElementById ('user-choice');
// const resultDisplay = document.getElementById ('result');
// const possibleChoices = document.querySelectorAll ('button'); //Para seleccionar varios. con elemento o clase.
// //Estas variables dependeran de las opciones
// let userChoice;
// let computerChoice;
// let result;

// // Tocar boton y generar texto en el lugar correcto
// possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
//     userChoice = e.target.id
//     userChoiceDisplay.innerHTML = userChoice
//     generateComputerChoice()
//     getResult()
// })) //El método forEach() ejecuta la función indicada una vez por cada elemento del array. 
// // A cada boton le aplicamos un metodo llamado adEventListener('click') y a este evento ,(e) le aplicamos el siguiente bloque a la varible userChoice que detonar'a al hacer click en el bot'on
// //e.target.id....e de evento.....target de selecciojnar.....el texto del id
// //con innerHtml ubicamos dicho texto en el lugar que deseamos en este caso en el span con la const userChoiceDisplay
// //Y quiero q automaticamente se genere la respuesta del ordenador con la funcio'on generateComputerChoice()

// //Para generar la respuesta del ordenador
// function generateComputerChoice() {
//     const randomNumber = Math.floor(Math.random() *3);
//     console.log(randomNumber)
//     if (randomNumber === 0) {
//         computerChoice = 'rock'
//     } 
//     if (randomNumber === 1) {
//         computerChoice = 'paper'
//     } 
//     if (randomNumber === 2) {
//         computerChoice = 'scissors'
//     } 
    
//     computerChoiceDisplay.innerHTML = computerChoice


// }

// //Para generar el resultado

// function getResult() {
//     if (computerChoice === userChoice) {
//         result = 'It/s a draw!'
//     }
//     if (computerChoice === 'rock' && userChoice === 'paper') {
//         result = 'You won!'
//     }
//     if (computerChoice === 'paper' && userChoice === 'scissors') {
//         result = 'You won!'
//     }
//     if (computerChoice === 'scissors' && userChoice === 'rock') {
//         result = 'You won!'
//     }
//     if (computerChoice === 'scissors' && userChoice === 'paper') {
//         result = 'You lost!' 
//     }
//     if (computerChoice === 'paper' && userChoice === 'rock') {
//         result = 'You lost!' 
//     }
//     if (computerChoice === 'rock' && userChoice === 'scissors') {
//         result = 'You lost!' 
//     }

//     resultDisplay.innerHTML = result
// }

