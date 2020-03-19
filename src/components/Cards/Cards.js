import React from 'react';

import styles from './Cards.module.css';
import Card from '../Card/Card';

import cards from '../../cards.js';

const Cards = () => {
    return (
        <div className={styles.cardsContainer}>
            {cards.map((card) => <Card category={card.category} description={card.description} image={card.image} />)}
        </div>
    );
};

export default Cards;