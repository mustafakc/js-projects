const input = document.querySelector(".input");
const guessButton = document.querySelector(".guessBtn");
const guessSituation = document.querySelector(".guessSituation");
const guessNo = document.querySelector(".guessNo");
const guessedNumbers = document.querySelector(".guessedNumbers");
const resetBtn = document.querySelector(".reset");
const winCard = document.querySelector(".win");
const correctPrg = document.querySelector(".correct")
const ready = document.querySelector(".ready");
const foundPrg = document.querySelector(".foundPrg");

let number = 25;
let count = 0;
let numbers = [];

resetBtn.addEventListener("click", getRandomNumber);

function getRandomNumber() {
    number = Math.round(Math.random() * 100);
    console.log(number)
    guessSituation.innerHTML = "Let's Try..";
    guessNo.innerHTML = "No, of guesses: 0";
    guessedNumbers.innerHTML = "Guessed numbers are: None";
    winCard.style.display = "none"
    input.value = "0";

}
guessButton.addEventListener("click", checkNumber);

function checkNumber() {
    if (input.value == number) {
        ready.innerHTML = "Congrats!";
        foundPrg.innerHTML = "You found the correct number."
        correctPrg.innerHTML = "The correct number is : " + number;
        resetBtn.textContent = "Reset Game";
        winCard.style.display = "flex";
        numbers = [];
    } else {
        if (numbers.includes(input.value)) {

        } else {

            count++;
            numbers.push(input.value);
            guessNo.innerHTML = "No, of guesses: " + count;
        }

        guessedNumbers.innerHTML = "Guessed numbers are: " + numbers;
        if (input.value > number) {
            guessSituation.innerHTML = "Your guess is too high.";

        } else if (input.value < number) {
            guessSituation.innerHTML = "Your guess is too low.";

        }
    }

}

