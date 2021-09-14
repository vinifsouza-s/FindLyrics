import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './components/layout/Index';
import Navbar from "./components/layout/Navbar";
import Lyrics from './components/tracks/Lyrics';

import { ContextController } from './context';
import './index.css';


function App() {
  return (
    <ContextController>
        <Router>
          <div className="App">
            <header className="App-header">
                <Navbar />
                <div className="container">
                  <Switch>
                    <Route exact path="/" component={Index} />
                    <Route exact path="/lyrics/track/:id" component={Lyrics} />
                  </Switch>
                </div>
            </header>
          </div>
        </Router>
      </ContextController>
  );
}

export default App;
