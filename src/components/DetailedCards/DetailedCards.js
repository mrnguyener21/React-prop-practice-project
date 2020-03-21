import React from 'react';

import DetailedCard from './DetailedCard/DetailedCard';

import detailedCardsData from '../../data/detailedCards';

import styles from './DetailedCards.module.css';

const DetailedCards = (props) => {
  const type = props.type;
  const chosenDetailedCards = detailedCardsData[type];

  return (
    <div className={styles.detailedCards}>
      {chosenDetailedCards.map((detailedCard) => <DetailedCard title={detailedCard.title} description={detailedCard.description} />)}
    </div>
  )
}

export default DetailedCards;