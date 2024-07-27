let gameResult = document.getElementById("gameResult")
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);
// console.log(randomNumber);
// console.log(userInput);

function checkGuess(){
    let guessedNumber = parseInt(userInput.value);
    
    if (guessedNumber > randomNumber){
        gameResult.textContent = "Too High! Try again..";
    }
    else if (guessedNumber < randomNumber){
        gameResult.textContent = "Too Low! Try again..";
    }
    else if (guessedNumber === randomNumber){
        gameResult.textContent = "Congratulations ";
    }
    else{
        gameResult.textContent = "Please provide a valid input"
    }

}