import React from 'react';

import { Card } from '../card/card.component';

import './card-list.styles.css';

/**
 * Recieves props = monsters form parent component (App)
 * Creates a new array of monsters 
 * returns  a styled list of Cards with a unique prop id for each monster
 * @param {*} props 
 * @returns 
 */
export const CardList = props => (
  <div className='card-list'>
    {props.monsters.map(monster => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);
