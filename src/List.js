import './List.css'
import React from 'react';
import ReactDOM from 'react-dom';
import card from './Card.js'




function list(header,cards) {
  return(
    <section className='List'>
      <header className='List-header'>
        <h2>{header}</h2>
      </header>
      <div className='List-cards'></div>
    </section>
  )
}
