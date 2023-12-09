let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("button");
let userScore = document.querySelector("#userScore");
let compScore = document.querySelector("#compScore");
let clickSound = new Audio('rps-click-sound.wav');
let user = 0;
let comp = 0;

const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        user++;
        msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = 'green';
        userScore.innerText = user;
    } else {
        comp++;
        msg.innerText = `You lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = 'red';
        compScore.innerText = comp;
    }
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if(userChoice === compChoice) {
        msg.innerText = 'Game draw, Play again!';
        msg.style.backgroundColor = 'rgb(7, 49, 233)';
    } else {
        let userWin = true;
        if(userChoice === 'rock') {
            userWin = compChoice === 'paper' ? false : true;
        } else if (userChoice === 'paper') {
            userWin = compChoice === 'scissors' ? false : true;
        } else {
            userWin = compChoice === 'rock' ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach(choice => {
    choice.addEventListener("click", function() {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
        clickSound.play();
    })
})