import React from 'react'; 

import styles from './Cards.module.css'; 
import Card from './Card/Card'; 
import cardsData from '../../data/CardsData'; 

const Cards = () => {
    return (
        <div className={styles.cardsContainer}>
            {cardsData.map((cardData) => <Card cardData={cardData}/>)}
        </div>    
    );
};

export default Cards;