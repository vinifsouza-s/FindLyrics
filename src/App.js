import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './components/layout/Index';
import Navbar from "./components/layout/Navbar";
import { Provider } from './context';
import './index.css';

function App() {
  return (
    <Provider>
        <Router>
          <div className="App">
            <header className="App-header">
                <Navbar />
                <div className="container">
                  <Switch>
                    <Route exact path="/" component={Index} />
                  </Switch>
                </div>
            </header>
          </div>
        </Router>
      </Provider>
  );
}

export default App;
