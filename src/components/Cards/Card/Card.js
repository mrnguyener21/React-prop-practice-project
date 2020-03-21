import React from 'react';
import { Link } from "react-router-dom";

import styles from'./Card.module.css';

const Card = (props) => {
    return (
        <div className={styles.cardContainer}>
            <h1 className={styles.category}>{props.card.category}</h1>
            <img className={styles.picture} alt="card" src={props.card.image} />
            <p className={styles.description}>{props.card.description}</p>
            <Link to={props.card.title}>More Details</Link>
        </div>
    );
};

export default Card;