import React from 'react';

import styles from'./Card.module.css';

const Card = (props) => {
    return (
        <div className={styles.cardContainer}>
            <h1 className="category">{props.category}</h1>
            <img className="picture" alt="card" src={props.image} />
            <p className="description">{props.description}</p>
        
        </div>
    );
};

export default Card;