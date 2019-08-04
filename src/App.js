import React from 'react';
import './App.css';

import DadJoke from './dad-joke';
import {Header} from './header';
import {Imessage} from './imessage';

function App() {
  return (
    <div className="App">
      <Header />
      <Imessage />
      <DadJoke />
    </div>
  );
}

export default App;
