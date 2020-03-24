import React from 'react'; //importing react module

import DetailedCard from './DetailedCard/DetailedCard'; //importing data from detailedCard component

import DetailedCardsData from '../../data/DetailedCardsData'; //importing data from detailedCarsData component

import styles from './DetailedCards.module.css'; //importing styling

const DetailedCards = (props) => {
  // const chosenDetailedCards = detailedCardsData[props.type];
   //above we are setting the varibale to equal the prop labedeld type within the detailedCardsData component

  return (
    <div className={styles.detailedCards}>
      {
      DetailedCardsData[props.type]
        .map((detailedCardData) => (
          <DetailedCard 
            title={detailedCardData.title} 
            description={detailedCardData.description} 
          />
        ))} 
      {
      /* //QUESTION HOW HOW DOES THE TYPE MATCH WHEN DETAILEDCARDSDATA DOES NOT HAVE A PROP NAMED TYPE TO MATCH TO?s */}
    </div>
  )
}

export default DetailedCards;