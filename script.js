let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const gencompchoice = () => { //generate comp choice
    let options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

const drawgame = () => {
    msg.innerText = "Game Was Draw";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userwin, userchoice, compChoice) => {
    if (userwin) {
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You win! Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `You lose. ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playgame = (userchoice) => {
    console.log("user choice =", userchoice);
    // Generate computer choice 
    const compChoice = gencompchoice();
    console.log("computer choice:", compChoice);

    if (userchoice == compChoice) {
        drawgame();
    } else {
        let userwin = true;
        if (userchoice == "rock") {
            userwin = compChoice === "paper" ? false : true;
        } else if (userchoice == "paper") {
            userwin = compChoice === "scissors" ? false : true;
        } else {
            userwin = compChoice == "rock" ? false : true;
        }
        showWinner(userwin, userchoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});
