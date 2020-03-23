import React from 'react'; //importing reactmodule
import { Link } from "react-router-dom"; //importing link tag from react router module

import styles from'./Card.module.css'; //importing styling 

const Card = (props) => {
    return (
        <div className={styles.cardContainer}>
            <h1 className={styles.category}>{props.cardData.category}</h1>
            {/* //above we fetching data from the category object in the CardsData conponent */}
            <img className={styles.picture} alt="card" src={props.cardData.image} />
            {/* //above we fetching data from the category object in the CardsData conponent */}
            <p className={styles.description}>{props.cardData.description}</p>
            {/* //above we fetching data from the category object in the CardsData conponent */}
            <Link to={props.cardData.title}>More Details</Link>
            {/* above we are using the link tag to connect this to our what is contained within our router tag in the App component. We are linking it to the path that matches its props titled type. In this case we are comparing it to the title object within the cardsData component to see if any will match and if so display take us to the matched page */}
        </div>
    );
};

export default Card;