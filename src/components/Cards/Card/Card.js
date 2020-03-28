import React from 'react'; 
import { Link } from "react-router-dom"; 
import styles from'./Card.module.css'; 

const Card = (props) => {
    return (
        <div className={styles.cardContainer}>
            <Link className={styles.link}to={props.cardData.title}>
                <h1 className={styles.category}>{props.cardData.category}</h1>  
            </Link>
            <img className={styles.picture} alt="card" src={props.cardData.image} />
     
        </div>
    );
};

export default Card;