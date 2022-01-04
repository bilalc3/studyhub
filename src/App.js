import Landing from "./Landing";
import Home from "./Home"; 
import Calculator from "./Calculator"; 
import HomeNavbar from "./HomeNavbar"; 
import Timer from "./Timer"; 
import Recreation from "./Recreation"; 
import Todo from "./Todo"; 
import { Link } from "react-router-dom";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 


function App() {
  return (
    <Router> 
      <div className="App">
        <Switch>
        <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/home">
            <HomeNavbar />
            < Home /> 
          </Route>
          <Route exact path="/Timer">
            <HomeNavbar />
            < Timer />
          </Route>
          <Route exact path="/Recreation">
            < HomeNavbar />
            < Recreation />
          </Route>
          <Route exact path="/Calculator">
            < HomeNavbar />
           < Calculator />
          </Route>
          <Route exact path="/Todo">
            < HomeNavbar />
            < Todo  />
           
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
