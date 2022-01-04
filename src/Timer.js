import './assets/css/Timer.css'; 
import React, {useState, useEffect} from 'react'; 


const Timer = () => {
    const [minutes, setMinutes] = useState(25); 
    const [seconds, setSeconds] = useState(0); 
    const [displayMessage, setDisplayMessage] = useState(false ); 

    useEffect(() => {
        let interval = setInterval(() => {
          clearInterval(interval);
    
          if (seconds === 0) {
            if (minutes !== 0) {
              setSeconds(59);
              setMinutes(minutes - 1);
            } else {
              let minutes = displayMessage ? 24 : 4;
              let seconds = 59;
    
              setSeconds(seconds);
              setMinutes(minutes);
              setDisplayMessage(!displayMessage);
            }
          } else {
            setSeconds(seconds - 1);
          }
        }, 1000);
      }, [seconds]);

    const timerMinutes = minutes < 10? `0${minutes}` : minutes; 
    const timerSeconds = seconds < 10? `0${seconds}`: seconds; 

    
    return (
    <div className="timerContainer">
        <div className="timerLeft">
            <h1 className='timerName'>Pomodoro Technique</h1>
            <p className='pText'>It is a well-known and researched technique primarily designed for students, in order to increase productivity. It follows a 25 min continous work / 5 min break system </p>
            <p className='pText' > To read more about the technique visit <a className='pomoLink' href="https://todoist.com/productivity-methods/pomodoro-technique">here</a> </p>

        </div>

        <div className="pClockright">
        <div className="pMessage">
                {displayMessage && <div className='pBreak'>Break Time! Next work session starts just in: </div>} 
            </div>
            <div className="pTimer">
                {timerMinutes}:{timerSeconds}
            </div>
 
        </div>

    </div>);
}
 
export default Timer;