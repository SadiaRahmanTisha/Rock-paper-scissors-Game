let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");


const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game is draw! Play Again";
    msg.style.backgroundColor = "pink";
    msg.style.color = "black"
}


const showwinner = (userwin, userchoice, computerchoice) => {
    if(userwin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win!  Your ${userchoice} beats ${computerchoice}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "white"
    } else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        console.log("You Lose!");
        msg.innerText = `You Lose! ${computerchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "orange";
        msg.style.color = "black";
    }
}

const playgame = (userchoice) => {
    console.log("user choice = ", userchoice);
    const computerchoice = genComputerChoice();
    console.log("computer choice = ", computerchoice);

    if(userchoice === computerchoice) {
        drawGame();
    } else {
        let userwin = true;
        if(userchoice === "rock") {
            userwin = computerchoice === "paper" ? false : true;
        }else if(userchoice === "paper") {
             userwin = computerchoice === "scissors" ? false : true;
        }else {
             userwin = computerchoice === "rock" ? false : true;
        }
        showwinner(userwin, userchoice, computerchoice);
    }
};

choices.forEach((choice)  => {
    choice.addEventListener("click", ()  => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});