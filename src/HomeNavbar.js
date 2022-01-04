import backTriangle from './assets/images/backTriangle.png'
import './assets/css/Home/nav1.css'; 
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import { Link } from "react-router-dom";

const backCreator = () => {
    const currentLocation = window.location.pathname; 
    if (currentLocation === '/Recreation' || currentLocation === '/Calculator' || currentLocation === '/Timer' || currentLocation === '/Todo'){
        return '/Home'; 
    }
    else {
        return '/'
    }
}

const HomeNavbar = () => {
    return ( 
    <nav className='nav1'>
        < Link to={backCreator()}>
            <div className="leftnav1">
            <div class="triangle-left"></div>
                <h4>Back</h4>
            </div>
        </ Link> 
        < Link to="/">
        <div className="navName">
            <h4>Study hub</h4>
        </div>
        </ Link>
        <div className="invisible">
            
        </div>
    </nav> );
}
 
export default HomeNavbar;