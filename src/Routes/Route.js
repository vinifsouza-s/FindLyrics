import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Index from '../components/layout/Index';
import Navbar from "../components/layout/Navbar";
import Lyrics from '../components/tracks/Lyrics';
import '../index.css';

const Rota = () => (
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
)

export default Rota;