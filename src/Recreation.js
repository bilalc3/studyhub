import rock from "./assets/images/rock.jpeg"
import paper from "./assets/images/paper.jpeg"
import scissors from "./assets/images/scissors.jpeg"
import './assets/css/RPS.css'; 
import { useState } from 'react';
import { Link } from "react-router-dom";


const computerPlay = () => {
    const possibleOptions = ["Rock", "Paper", "Scissors"]; 
    let  randomizer = parseInt(3 * ((Math.random()))); 
    //console.log(randomizer); 
    return possibleOptions[randomizer]; 
}; 



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

    const [playerPoint, setplayerPoint] = useState(0); 
    const [computerPoint, setcomputerPoint] = useState(0); 
    const [saying, setSaying] = useState("Let the game begin")
    const [againMessage, setagainMessage] = useState(false)
    const [finalScore, setfinalScore] = useState(''); 

    const scoreChecker = () => {
        if (playerPoint === 5) {
            setfinalScore(`Game over! You have won ${playerPoint}-${computerPoint}`)
            setagainMessage(true)
            console.log("hello world");; 
        }
        else if (computerPoint === 5) {
            setfinalScore(`Game over! You have lost ${playerPoint}-${computerPoint}`); 
            setagainMessage(true);
        }
    }


    // one round of rps, given player and computer inputs, outputs an array with scores and text
const playRound = (playerSelection, computerSelection) => {
    //const playerCase = playerSelection.toLowerCase(); 
    //const computerCase = computerSelection.toLowerCase(); 
    let playerCase = playerSelection; 
    let computerCase = computerSelection; 
    
    if (playerPoint < 6 && computerPoint < 6) {
        
        if (computerCase==='Rock' && playerCase==="Scissors") {
            setcomputerPoint(prevcomputerPoint =>  prevcomputerPoint + 1); 
            setSaying("You Lose! Rock beats Scissors")
            scoreChecker(); 
            return [0, 1, "You Lose! Rock beats Scissors"]; 

        } else if (computerCase==='Paper' && playerCase==="Rock") {
            setcomputerPoint(prevcomputerPoint =>  prevcomputerPoint + 1); 
            setSaying("You Lose! Paper beats Rock")
            scoreChecker(); 
            return [0, 1, "You Lose! Paper beats Rock"]; 

        } else if (computerCase==='Scissors' && playerCase==="Paper") {
            setcomputerPoint(prevcomputerPoint =>  prevcomputerPoint + 1); 
            setSaying("You Lose! Scissors beats Paper")
            scoreChecker(); 
            return [0, 1, "You Lose! scissors beats paper"]; 

        }
        else if (computerCase===playerCase) {
            setSaying(`Tied Game, ${playerCase} ties ${computerCase}`)
            return [0, 0, `Tied Game, ${playerCase} ties ${computerCase}`]; 

        } else {
            setplayerPoint(prevplayerPoint =>  prevplayerPoint + 1); 
            setSaying(`You win, ${playerCase} beats ${computerCase}`)
            scoreChecker(); 
            return [1, 0, `You win, ${playerCase} beats ${computerCase}`]; 
        }
    }

}


    return (
    <div className="rpsContainer">

         <h1 className="newheading">Rock, Paper and Scissors</h1>

         <div className="liveScores">
             {playerPoint} - {computerPoint}
             <div className="scoreSaying">
                {saying}
             </div>

         </div>
        

        <div id="container"></div>

        <div className="playContainer">
            <div className="rockContainer">
                <img onClick={() => playRound('Rock', computerPlay())} className = "play playImage" data-key="rock" src={rock} alt="rock" id ="#rock" />
                <p className = "info">Rock</p>
            </div>
            <div class="paperContainer">
                <img onClick={() => playRound('Paper', computerPlay())} className = "play playImage" data-key="paper" src={paper} alt="paper" />
                <p className = "info" >Paper</p>
            </div>
            <div onClick={() => playRound('Scissors', computerPlay())} class="scissorsContainer">
                <img className = "play playImage" data-key="scissors" src={scissors} alt="scissors"  />
                <p className="info"> Scissors</p>
                
            </div>
            
        </div>
        <div className="playAgain">
                {againMessage && <h2>{finalScore}</h2>}
                <Link to="/Home">  
                {againMessage && <button type="button" onClick={()=> "google.com"}>Back to Studying!</button>} 
                </Link>         
            </div>


    </div>);
}
 
export default Recreation;