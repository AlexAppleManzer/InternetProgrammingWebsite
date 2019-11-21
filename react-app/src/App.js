import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import {toast} from 'react-toastify';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import CatFacts from "./CatFacts";
import Home from "./Home"

function App() {
  document.title = "Cat Facts Project"

  toast.configure();
  return (
    <Router basename="/~amanzer/final-project">
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link to="/" className="navbar-brand">Cat Facts!</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <Link className="nav-item nav-link" to="/">Home</Link>
            <Link className="nav-item nav-link" to="/about">About</Link>
            <Link className="nav-item nav-link" to="/facts">Facts</Link>
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <div className="card router-outlet text-white bg-dark">
          <Switch >
            <Route path="/about">
              <About />
            </Route>
            <Route path="/facts">
              <CatFacts />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>

      </div>
    </Router>
  );
}


function About() {
  return (
    <div className="card-body">
      <h2>About The Site</h2>
      <p>This site uses information provided by the Cat facts API <a href="https://catfact.ninja">Link Here</a></p>
      <p>It was made using React and the source is <a href="https://github.com/AlexAppleManzer/InternetProgrammingWebsite">Here</a></p>
    </div>


  );
}

export default App;
