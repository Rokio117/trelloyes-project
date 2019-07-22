import React from 'react';
import STORE from './src/store';
import './App.css';
import card from './src/Card'
import list from './src/list'

const newList= 

function App(STORE) {
  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
        <div className="App-list">
          {STORE.lists.map(lists => list(lists.header, ))}
        </div>
      </header>
    </main>
  );
}

export default App;