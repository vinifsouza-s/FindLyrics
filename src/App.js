import React from 'react';
import Index from './components/layout/Index';
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Navbar />
          <Index />
      </header>
    </div>
  );
}

export default App;
