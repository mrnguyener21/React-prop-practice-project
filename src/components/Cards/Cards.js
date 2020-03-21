import React from 'react';

import styles from './Cards.module.css';
import Card from './Card/Card';

import cards from '../../data/cards';

const Cards = () => {
    return (
        <div className={styles.cardsContainer}>
            {cards.map((card) => <Card card={card}/>)}
        </div>    
    );
};

export default Cards;