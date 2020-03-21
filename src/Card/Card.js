import React from 'react';

import styles from'./Card.module.css';

const Card = (props) => {
    return (
        
        <div className={styles.cardContainer}>
            <h1 className={styles.category}>{props.category}</h1>
            <img className={styles.picture} alt="card" src={props.image} />
            <p className={styles.description}>{props.description}</p>
        
        </div>
    );
};

export default Card;