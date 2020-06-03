import React from 'react';
import './App.css';
import { Route, Switch, Link } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home";
import Survey from "./components/Survey";
import Results from "./components/Results";
import { Navbar, NavItem } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Header/>
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
