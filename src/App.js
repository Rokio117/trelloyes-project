import React from 'react';
import STORE from './store.js';
import './App.css';

import List from './List.js'
console.log(STORE)

const cardList = STORE.lists
console.log(cardList);
console.log(cardList.map(cardList => cardList.cardIds))

function App(STORE) {
  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
        <div className="App-list">
          {cardList.map(function (cardList) 
          {return List(cardList.header, cardList.cardIds.map(function (cards){ 
            let newId = cards
            console.log('newId in App function', newId)
            console.log(STORE.cards, 'STORE.cards in APP')
            return STORE.cards
          })
            )}
            )}
        </div>
      </header>
    </main>
  );
}

export default App