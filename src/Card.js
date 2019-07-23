import './Card.css';
import React from 'react';
import ReactDOM from 'react-dom';

 function Card(title, content) {
   console.log('Card.js')
   return (
     <div className='card'>
       <button type="button">Delete</button>
       <h3>{title}</h3>
       <p>{content}</p>
     </div>
   )
 }

export default Card;