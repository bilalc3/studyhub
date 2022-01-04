import rock from "./assets/images/rock.jpeg"
import paper from "./assets/images/paper.jpeg"
import scissors from "./assets/images/scissors.jpeg"
import './assets/css/RPS.css'; 

const computerPlay = () => {
    const possibleOptions = ["Rock", "Paper", "Scissors"]; 
    let  randomizer = parseInt(3 * ((Math.random()))); 
    //console.log(randomizer); 
    return possibleOptions[randomizer]; 
}; 

// one round of rps, given player and computer inputs, outputs an array with scores and text
const playRound = (playerSelection, computerSelection) => {
    const playerCase = playerSelection.toLowerCase(); 
    const computerCase = computerSelection.toLowerCase(); 

    if (computerCase==='rock' && playerCase==="scissors") {
        return [0, 1, "You Lose! Rock beats Scissors"]; 

    } else if (computerCase==='paper' && playerCase==="rock") {
        return [0, 1, "You Lose! Paper beats Rock"]; 

    } else if (computerCase==='scissors' && playerCase==="paper") {
        return [0, 1, "You Lose! scissors beats paper"]; 

    }
    else if (computerCase===playerCase) {
        return [0, 0, `Tied Game, ${playerCase} ties ${computerCase}`]; 

    } else {
        return [1, 0, `You win, ${playerCase} beats ${computerCase}`]; 
    }

}

// automated 5 round game
const game = () => {
    let playerScore = 0; 
    let computerScore = 0; 
    /* for (let i = 0; i < 5; i++){
        let playerResponse = prompt("Input either Rock, Paper or Scissors"); 
        let answer = playRound (playerResponse, computerPlay()); 
        console.log(answer[2]); 
        playerScore+=answer[0]; 
        computerScore+=answer[1]; 
    } */
    if (playerScore > computerScore) {
        console.log(`You have Won by ${playerScore}-${5-playerScore}`);
    } else if (playerScore === computerScore) {
        console.log(`Game is Tied, ${playerScore}-${5-playerScore}`); 
    }
    else {
        console.log(`You have lost ${playerScore}-${5-playerScore}`); 
    }

}





const Recreation = () => {
    return (
    <div className="rpsContainer">

         <h1 className="newheading">Rock, Paper and Scissors</h1>
        

        <div id="container"></div>

        <div className="playContainer">
            <div className="rockContainer">
                <img className = "play playImage" data-key="rock" src={rock} alt="rock" id ="#rock"  />
                <p className = "info">Rock</p>
            </div>
            <div class="paperContainer">
                <img className = "play playImage" data-key="paper" src={paper} alt="paper" />
                <p className = "info" >Paper</p>
            </div>
            <div class="scissorsContainer">
                <img className = "play playImage" data-key="scissors" src={scissors} alt="scissors"  />
                <p className="info"> Scissors</p>
                
            </div>
        </div>


    </div>);
}
 
export default Recreation;