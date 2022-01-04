import backImage from "./assets/images/backgroundImage.png"
import React, {useState} from 'react'; 
import TypeWriter from "typewriter-effect"
import Button from 'react-bootstrap/Button'
//import 'bootstrap/dist/css/bootstrap.min.css' 
import { Link } from "react-router-dom";


const realTimeClock = () => {

    // retrieving data for timing
    let rtClock = new Date(); 
    let hours = rtClock.getHours(); 
    let minutes = rtClock.getMinutes(); 
    let seconds = rtClock.getSeconds(); 
    let date = rtClock.getDate(); 

    // data for day 
    let day = rtClock.getDay(); 
    let year = rtClock.getFullYear(); 
    let month = rtClock.getMonth(); 

    let monthArr = ["January","February","March","April","May","June","July", 
    "August","September","October","November","December"];
    let dayArr = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];

    day = dayArr[day]; 
    month = monthArr[month]; 

    // Am or Pm checker 
    let AmOrPm; 
    if (hours < 12) {
        AmOrPm = "AM"; 
    }
    else {
        AmOrPm = "PM"; 
    }

    // convert to non-military clock 
    hours = (hours > 12) ? hours - 12 : hours; 


    // Make sure the 0 before the time is present 
    hours = ("0" + hours).slice(-2); 
    minutes = ("0" + minutes).slice(-2); 
    seconds = ("0" + seconds).slice(-2); 
    return ([hours, minutes, seconds, AmOrPm, day, month, year, date])
}


const Landing = () => {

    // intializing the variable for the Time 
    const timeArr = realTimeClock()
    const [hours, setHours] = useState(timeArr[0]); 
    const [minutes, setMinutes] = useState(timeArr[1]); 
    const [second, setSeconds] = useState(timeArr[2]); 
    const [ampm, setAMPM] = useState(timeArr[3]); 
    const [day, setDays] = useState(timeArr[4]); 
    const [month, setMonth] = useState(timeArr[5]); 
    const [year, setYear] = useState(timeArr[6]); 
    const [date, setDate] = useState(timeArr[7]); 



    // changing the time by calling the intial function to update the values
    function timeUpdate () {
        const timeNewArr = realTimeClock(); 
        setHours (timeNewArr[0]); 
        setMinutes(timeNewArr[1]); 
        setSeconds(timeNewArr[2]); 
        setAMPM(timeNewArr[3]); 
        setDays(timeNewArr[4]); 
        setMonth(timeNewArr[5]); 
        setYear(timeNewArr[6]); 
        setDate(timeNewArr[7]); 

    }

    // upddating time every second
    setInterval(timeUpdate, 1000);


    return (  
        <div className="landingContainer">
                <div className="welcomingLanding">
                    < TypeWriter
                    // typewrtier effect
                    onInit={(typewriter) => {
                        typewriter.typeString("Welcome to Study Hub ...")
                        .pause(2000) 
                        .deleteAll()
                        .typeString("Enjoy Learning!!")
                        .start(); 
                    }}
                    
                    />
                </div>
                <div className="opacityEffect">
                    <div className="clock">
                        <div className="date">
                            <h1 className="dayDisplay">{day}, {month} {date}, {year}</h1>
                        </div>

                        <div className="time">
                            <h3 className="timeClock">{hours} : {minutes} : {second} {ampm} </h3>
                        </div>

                        <div className="intializer">
                            <Link to={`/home`}>                        
                                <button type="button" className="btn btn-light startButton" data-bs-toggle="button" autocomplete="off" >Start Studying Session</button>

                            </Link>

                        </div>
                    </div>
                </div>
                

            </div>
            
            
    );
}
 
export default Landing;