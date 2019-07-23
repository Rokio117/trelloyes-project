import React from 'react';
import STORE from './store.js';
import './App.css';

import List from './List.js'
console.log(STORE, 'STORE global')

const cardList = STORE.lists
const allStoreCards = STORE.allCards
console.log(typeof(allStoreCards))
console.log(cardList);
console.log(cardList.map(cardList => cardList.cardIds), 'mapped cardList')

function App(STORE) {
  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
        <div className="App-list">
          {cardList.map(function (cardList) 
          {return List(cardList.header, cardList.cardIds.map(function (cards){ 
            console.log('cardIds', cards)
            // console.log(cards, 'cards')
            // console.log(allStoreCards.a, 'allCards.a')
            // console.log(allStoreCards.cards, 'loop of card objects')
            // return allStoreCards.cards
          })
            )}
            )}
        </div>
      </header>
    </main>
  );
}

export default App