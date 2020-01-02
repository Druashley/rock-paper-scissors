let score = document.getElementById('score');

computerScore = 0;

humanScore = 0;

let logicLine = document.getElementById('logicLine');
let playerLogic = document.getElementById('playerLogic');


function computeWinner(myValue) {
    let computerAnswer = computerPlay();
    switch (myValue) {
        case 'Rock':
            if (computerAnswer === 'Paper') {
                logicLine.textContent = 'The computer picked '+ computerAnswer;
                playerLogic.textContent = 'You picked Rock';
                computerScore += 1;
                score.textContent = `Your Score is: ${humanScore} and the computer's score is: ${computerScore}`;
                fiveWins();
            } else if (computerAnswer === 'Scissors') {
                logicLine.textContent = 'The computer picked '+ computerAnswer;
                playerLogic.textContent = 'You picked Rock';
                humanScore += 1;
                score.textContent = `Your Score is: ${humanScore} and the computer's score is: ${computerScore}`;
                fiveWins();
            } else {
                playerLogic.textContent = 'You picked Rock';
                logicLine.textContent = 'The computer picked '+ computerAnswer;
                fiveWins();
                console.log('Tie')
            }
            break;
        case 'Paper':
            if (computerAnswer === 'Scissors') {
                logicLine.textContent = 'The computer picked '+ computerAnswer;
                playerLogic.textContent = 'You picked Paper';
                computerScore += 1;
                score.textContent = `Your Score is: ${humanScore} and the computer's score is: ${computerScore}`;
                fiveWins();
            } else if ( computerAnswer === 'Rock') {
                logicLine.textContent = 'The computer picked '+ computerAnswer;
                playerLogic.textContent = 'You picked Paper';
                humanScore += 1;
                score.textContent = `Your Score is: ${humanScore} and the computer's score is: ${computerScore}`; 
                fiveWins(); 
            } else {
                logicLine.textContent = 'The computer picked '+ computerAnswer;
                playerLogic.textContent = 'You picked Paper';
                fiveWins();
                console.log('Tie')
            }
            break;
        case 'Scissors':
            if (computerAnswer === 'Rock'){
                logicLine.textContent = 'The computer picked '+ computerAnswer;
                playerLogic.textContent = 'You picked Scissors';
                computerScore += 1;
                score.textContent = `Your Score is: ${humanScore} and the computer's score is: ${computerScore}`;
                fiveWins();
            } else if (computerAnswer === 'Paper') {
                logicLine.textContent = 'The computer picked '+ computerAnswer;
                playerLogic.textContent = 'You picked Scissors'
                humanScore += 1;
                score.textContent = `Your Score is: ${humanScore} and the computer's score is: ${computerScore}`;
                fiveWins();
            } else {
                logicLine.textContent = 'The computer picked '+ computerAnswer;
                playerLogic.textContent = 'You picked Scissors'
                fiveWins();
                console.log('Tie')
                
            }
        default:
            break;
    }
}

function fiveWins(){
    if (humanScore >= 5){
        alert('You won!')
    } else if (computerScore >= 5){
        alert('The computer won!')
    } else console.log('No one has won yet.')
}





// function computerWinChecker(){
//     if (computerScore >= 5){
//         alert("The computer won.");
//     } else console.log('the computer hasnt won yet');
// }


// computerWinChecker();






function computerPlay() {
    let rps;

    rps = Math.random();


    if (rps < .33) {
        return ("Rock");
    } else if (rps < .66) {
        return ("Paper");
    } else {
        return ("Scissors");
    }
}


let computerAnswer = computerPlay();



// //console.log(computerAnswer);

// // let myAnswer = prompt('Pick Rock, Paper, or Scissors');

// function whoWon(var1, var2) {

//     if (var1 == "Rock" && var2 == "Rock") {
//         return ("You both picked Rock, you tie");
//     } else if (var1 == "Paper" && var2 == "Paper") {
//         return ("You both picked Paper, you tie")
//     } else if (var1 == "Scissors" && var2 == "Scissors") {
//         return ("You both picked Scissors, you tie")
//     } else if (var1 == "Paper" && var2 == "Rock") {
//         return ("You picked Paper and the computer picked Rock, you win!")
//     } else if (var1 == "Paper" && var2 == "Scissors") {
//         return ("You picked Paper and the computer picked Scissors, you lose")
//     } else if (var1 == "Rock" && var2 == "Paper") {
//         return ("You picked Rock and the computer picked Paper, you lose")
//     } else if (var1 == "Rock" && var2 == "Scissors") {
//         return ("You picked rock and the computer picked Scissors, you win!")
//     } else if (var1 == "Scissors" && var2 == "Paper") {
//         return ("You picked Scissors and the computer picked Paper, you win!")
//     } else if (var1 == "Scissors" && var2 == "Rock") {
//         return ("You picked Scissors and the computer picked Rock, you lose")
//     } else {
//         return ("Someone is cheating.")
//     }
// }



// function game() {
//     console.log(whoWon(myAnswer, computerAnswer));
// }

// game();
