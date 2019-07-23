import React from 'react';
import STORE from 'store.js';
import './App.css';

import list from 'List.js'



function App(STORE) {
  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
        <div className="App-list">
          {STORE.lists.map(lists => list(lists.header, lists.cardIds.map(cardIds => STORE.allCards.cardIds)))}
        </div>
      </header>
    </main>
  );
}

export default App