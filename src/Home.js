import './assets/css/Home/Home.css'; 
import notebook from './assets/images/notebook.png'; 
import controller from './assets/images/controller2.png'; 
import timer from './assets/images/timer.png'; 
import calculator from './assets/images/calculator.jpeg'; 
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import { Link } from "react-router-dom";


const sessions = [
    {
        name: "Todo", 
        image: notebook, 
        id: 1

    }, 
    {
        name: "Calculator", 
        image: calculator, 
        id: 2

    }, 
    {
        name: "Timer", 
        image: timer, 
        id: 3

    }, 
    {
        name: "Recreation", 
        image: controller, 
        id: 4

    }
]

const Home = () => {
    return (  
        <div className="homeContainer">
            <div className="homeSessions">
                {sessions.map((session) => (
                    <Link to={`/${session.name}`}>                        
                    <div className="sessionPreview" key = {session.id}>
                        <div className="sessionName">
                            <h1 className='namesApp'>{session.name}</h1>
                        </div>
                        <div className="sessionImage">
                            <img src={session.image} alt="session" className="sessionImg" />
                        </div>

                    </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
 
export default Home;