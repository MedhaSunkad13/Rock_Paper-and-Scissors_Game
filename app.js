let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  console.log("Game was a draw");
  msg.innerText = "Game was Draw! Play Again";
  msg.style.backgroundColor = "blue";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `Hurrah! You Won, your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost, ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  //console.log("User Choice = ", userChoice);
  // Generate Computer Choice
  const compChoice = genCompChoice();
  //console.log("Computer Choice = ", compChoice);

  if (userChoice === compChoice) {
    // Tie
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // Scissors, Paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // Scissors, Rock
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }

    // Pass the result to the showWinner function
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    //console.log("Choice was clicked", userChoice);
    playGame(userChoice);
  });
});
