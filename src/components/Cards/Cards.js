import React from 'react'; //importing react module

import styles from './Cards.module.css'; //importin styling 
import Card from './Card/Card'; //importing data from Card module

import cardsData from '../../data/CardsData'; // importing data from the cardsData component

const Cards = () => {
    return (
        <div className={styles.cardsContainer}>
            {cardsData.map((cardData) => <Card cardData={cardData}/>)}
            {/* //above we are using the map function in order to loop through the data within our cardData component and create a new individual object for each of the objects within the array (in this case it will display a card for each object each with the data corresponding to that Object.) */}
        </div>    
    );
};

export default Cards;