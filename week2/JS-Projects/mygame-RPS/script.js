alert("Explore the Game Dimension")

// scroe starting value
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".game div");
const msg = document.querySelector(".msg p");
const userScoreEl = document.getElementById("user-score");
const compScoreEl = document.getElementById("comp-score");

// user choice to play the game
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.classList[0]; 
    playGame(userChoice);
  });
});

//  game logic
function playGame(userChoice) {
  // computer how get a random class 
  const options = ['rock', 'paper', 'scissors'];
  const compChoice = options[Math.floor(Math.random() * 3)];

  if (userChoice === compChoice) {
    showResult("Game is Draw!", userChoice, compChoice);
     msg.style.backgroundColor="orange"
  } else if (
    (userChoice === 'rock' && compChoice === 'scissors') ||
    (userChoice === 'paper' && compChoice === 'rock') ||
    (userChoice === 'scissors' && compChoice === 'paper')
  ) {
    userScore++;
    updateScore();
    showResult("You Win", userChoice, compChoice);
    msg.style.backgroundColor="green"
  } else {
    compScore++;
    
    updateScore();
    showResult("You Lose! Paly again", userChoice, compChoice);
     msg.style.backgroundColor="red"
   
  }
}

// updated scroe on user and computer
function updateScore() {
  userScoreEl.textContent = userScore;
  compScoreEl.textContent = compScore;

}

function showResult(resultText, user, comp) {

  msg.textContent = `${resultText} You: ${user}, Comp: ${comp}`;
}
