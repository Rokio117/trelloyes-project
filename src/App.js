import React from 'react';
import STORE from 'store';
import './App.css';
function App(store) {
  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
        <div className="App-list"></div>
      </header>
    </main>
  );
}

export default App;