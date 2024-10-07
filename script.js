// Initial Variables
let randomNumber = Math.floor(Math.random() * 100) + 1;
let gameActive = true;

// DOM Elements
const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const resultText = document.getElementById('result');
const restartButton = document.getElementById('restartButton');

// Guess Function
function guessNumber() {
    const userGuess = Number(guessInput.value);

    if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
        resultText.textContent = 'Please enter a number between 1 and 100!';
        return;
    }

    if (!gameActive) {
        resultText.textContent = 'Game over! Please restart the game.';
        return;
    }

    // Logic if the guess is correct or incorrect
    if (userGuess === randomNumber) {
        resultText.textContent = 'Tebakan Anda benar!';
        resultText.style.color = 'green';
        gameActive = false;
        restartButton.style.display = 'inline-block';
    } else {
        resultText.textContent = 'Tebakan salah! Coba lagi.';
        resultText.style.color = 'red';
        guessInput.value = '';
        guessInput.focus();
    }
}

// Restart Game
function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    gameActive = true;
    resultText.textContent = '';
    guessInput.value = '';
    restartButton.style.display = 'none';
    resultText.style.color = 'black';
}

// Event Listeners
guessButton.addEventListener('click', guessNumber);
restartButton.addEventListener('click', restartGame);
