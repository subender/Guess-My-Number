//Elements
const numberEl = document.querySelector(".number");
const scoreEl = document.querySelector(".score");
const highscoreEl = document.querySelector(".highscore");
const inputGuessEl = document.querySelector(".guess");
const messageEl = document.querySelector(".message");

//Buttons
const playAgainBtn = document.querySelector(".again");
const checkBtn = document.querySelector(".check");

// Variables
let score = 20;
let highScore = 0;
let secretNumber = generateRandomNumber();

//Event Listners
checkBtn.addEventListener("click", check);
playAgainBtn.addEventListener("click", reset);

//Functions
/////////////////////////

// Generates a random number
function generateRandomNumber() {
  let secretNumber = Math.floor(Math.random() * 20) + 1;
  return secretNumber;
}

//Displays Message
function displayMessage(msg) {
  messageEl.innerText = msg;
}

function check() {
  const guessedInput = Number(inputGuessEl.value);

  //if user don't give any input
  if (!guessedInput) {
    displayMessage("⛔️ Please Input A Number..");
    return;
  }

  //Checking if Answer is Correct or not.
  checkAnswer(guessedInput);
}

function checkAnswer(guess) {
  if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    numberEl.innerText = secretNumber;
    numberEl.style.width = "30rem";
    document.body.style.backgroundColor = "#60b347";
    checkBtn.disabled = true;
    if (score > highScore) {
      highScore = score;
      highscoreEl.innerText = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `📈 Too high!` : `📉 Too low!`);
      score--;
      scoreEl.innerText = score;
    } else {
      displayMessage("💥 You lost the game!");
      scoreEl.innerText = 0;
    }
  }
}

//Reset Game
function reset() {
  score = 20;
  secretNumber = generateRandomNumber();
  displayMessage("Start guessing...");
  scoreEl.innerText = score;
  numberEl.innerText = "?";
  inputGuessEl.value = "";
  numberEl.style.width = "15rem";
  document.body.style.backgroundColor = "#222";
  checkBtn.disabled = false;
}
