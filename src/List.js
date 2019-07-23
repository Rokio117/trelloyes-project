import './List.css'
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card.js'

console.log('List.js')

function List(header,cards) {
  console.log('List.js')
  return(
    <section className='List'>
      <header className='List-header'>
        <h2>{header}</h2>
      </header>
      <div className='List-cards'>
        {cards.map(cards => Card(cards.title, cards.content))}
        <button type="button" className="List-add-button">+ Add Random Card</button>
      </div>
    </section>
  )
}
export default List;
