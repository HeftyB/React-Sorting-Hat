import React from 'react';
import './App.css';
import { Route, Switch, Link } from "react-router-dom"
import Home from "./components/Home";
import Survey from "./components/Survey";
import Results from "./components/Results";
import { Navbar, NavItem } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Navbar>
        <NavItem><Link to="/">Home</Link></NavItem>  
        <NavItem><Link to="/Survey">Survey</Link></NavItem>  
        <NavItem><Link to="/Results">Results</Link></NavItem>  
      </Navbar>
      <Switch>
        <Route exact path={"/"}>
          <Home/>
        </Route>
        <Route path={"/Survey"}>
          <Survey></Survey>
        </Route>
        <Route path={"/Results"}>
          <Results/>
        </Route>
      </Switch>

    </div>
  );
}

export default App;
