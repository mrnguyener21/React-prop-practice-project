import React from 'react';

import styles from './DetailedCard.module.css';

const DetailedCard = (props) => {
  return (
    <div className={styles.detailedCard}> 
      <h1>{props.title}</h1>
      <h1>{props.description}</h1>
    </div>
  )
}

export default DetailedCard;
