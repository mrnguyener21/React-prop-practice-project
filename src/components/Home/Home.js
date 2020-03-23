import React from 'react'; //importing react

import Cards from '../Cards/Cards'; //importing data from cards component
import yugioh from '../../images/yugioh.png';//importing image
import styles from './Home.module.css';//importing styles

const Home = () => {
    return (
      <div className = {styles.Container}>
        <img className={styles.logo} src={yugioh} alt='image' /> 
        <div className={styles.intro}>Below are the 4 basic categories</div>
        <Cards/>
      </div>
    )
};

export default Home;