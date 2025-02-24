let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});

const drawGame = ()=>{
    console.log("Game was drawn");
};

const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin)
    {
        console.log("you win !");
        msg.innerText = `You win ! Yours ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore;
    }
    else
    {
        console.log("you lose !");
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compScorePara.innerText = compScore;
    }
}

const playGame = (userChoice)=>{
    console.log("user choice = ",userChoice);
    const compChoice = generateCompChoice();
    console.log("computer choice = ",compChoice);

    if(userChoice===compChoice)
    {
        drawGame();
        msg.innerText = "Draw.Play again";
        msg.style.backgroundColor = "#081b31";
    }
    else
    {
        let userWin = true;
        if(userChoice==="rock")
        {
            userWin = compChoice ==="paper"? false:true;
        }
        else if(userChoice==="paper")
        {
            userWin = compChoice==="scissors"?false:true; 
        }
        else
        {
            userWin = compChoice==="rock"?false:true; 
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

const generateCompChoice = ()=>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

//Math.floor(Math.random()*3)
//Math.floor helps to remove floating values and keep it into int values
//*3 is used to get the numbers between 0-2 (*num where num is less than the number which is required to get by 1)