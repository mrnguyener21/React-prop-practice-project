import React from 'react';

import styles from './DetailedCard.module.css';

const DetailedCard = (props) => {
  return (
    <div className={styles.detailedCard}> 
      <h1 className={styles.title}>{props.title}</h1>
      <div className={styles.info}>
          <img className={styles.image} alt='card' src={props.image}/>
          <h1 className={styles.description}>{props.description}</h1>
      </div>
    </div>
  )
}

export default DetailedCard;
