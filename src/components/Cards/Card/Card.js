import React from 'react'; //importing reactmodule
import { Link } from "react-router-dom"; //importing link tag from react router module

import styles from'./Card.module.css'; //importing styling 

const Card = (props) => {
    return (
        <div className={styles.cardContainer}>
            <Link className={styles.link}to={props.cardData.title}>
                <h1 className={styles.category}>{props.cardData.category}</h1>  
            </Link>
            <img className={styles.picture} alt="card" src={props.cardData.image} />
            <p className={styles.description}>{props.cardData.description}</p>
     
        </div>
    );
};

export default Card;