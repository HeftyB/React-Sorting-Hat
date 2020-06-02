import React from 'react';
import './App.css';
import { Route, Switch, Link } from "react-router-dom"
import Home from "./components/Home";
import Survey from "./components/Survey";
import Results from "./components/Results";

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/Survey">Survey</Link>
      <Link to="/Results">Results</Link>

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
