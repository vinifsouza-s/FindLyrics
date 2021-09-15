import React from 'react';
import { ContextController } from './context';
import './index.css';
import Rota from './Routes/Route';


function App() {
  return (
    <ContextController>
        <Rota />
      </ContextController>
  );
}

export default App;
