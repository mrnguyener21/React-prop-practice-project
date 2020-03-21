import React from 'react';

import styles from './Cards.module.css';
import Card from './Card';

import cards from './card-data';

const Cards = () => {
    return (
        <div className={styles.cardsContainer}>
            {cards.map((card) => <Card category={card.category} description={card.description} image={card.image} />)}
        </div>
        
    );
};

export default Cards;