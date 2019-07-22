import './List.css'
import React from 'react';
import ReactDOM from 'react-dom';
import card from './src/Card.js'



function list(header,cards) {
  return(
    <section className='List'>
      <header className='List-header'>
        <h2>{header}</h2>
      </header>
      <div className='List-cards'>
        {cards.map(cards => card(cards.title, cards.content))}
        <button type="button" className="List-add-button">+ Add Random Card</button>
      </div>
    </section>
  )
}
export default list;
