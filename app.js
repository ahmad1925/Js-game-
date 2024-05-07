const choices = document.querySelectorAll(".choice");

const generateRandomChoice = () => {
  let option = ["rock", "paper", "scissior"];
  const selectOptionByComputer = Math.floor(Math.random() * 3);
  return option[selectOptionByComputer];
};

const drawMatch = () => {
  console.log("match draw");
  let response = document.querySelector("#msg");
  response.innerText = "match draw";

};

const showWinner = (userWin) => {
  if (userWin) {
    console.log("you are win");
    let score = document.querySelector("#user_score");
    score.innerText++;
    let response = document.querySelector("#msg");
    response.innerText = "you are win";
  } else if (!userWin) {
    console.log("you lose");
    let score = document.querySelector("#com_score");
    score.innerText++;
    let response = document.querySelector("#msg");
    response.innerText = "you are loss";
  } else {
    console.log("some error");
  }
};

const playGame = (userChoice) => {
  console.log("user select", userChoice);
  const computerChoice = generateRandomChoice();
  console.log("computer select", computerChoice);

  let userWin = true;
  if (userChoice === computerChoice) {
    drawMatch();
  } else {
    if (userChoice === "rock") {
      //scissor paper
      userWin = computerChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // scissor rock
      userWin = computerChoice === "scissior" ? false : true;
    } else {
      userWin = computerChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");

    playGame(userChoice);
  });
});
