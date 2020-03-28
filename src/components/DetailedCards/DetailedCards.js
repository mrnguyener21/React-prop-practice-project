import React from 'react';

import DetailedCard from './DetailedCard/DetailedCard'; 
import DetailedCardsData from '../../data/DetailedCardsData'; 
import styles from './DetailedCards.module.css'; 

const DetailedCards = (props) => {

  return (
    <div className={styles.detailedCards}>
      {
      DetailedCardsData[props.type]
        .map((detailedCardData) => (
          <DetailedCard 
            title={detailedCardData.title} 
            description={detailedCardData.description}
            image={detailedCardData.image} 
          />
        ))} 
    </div>
  )
}

export default DetailedCards;