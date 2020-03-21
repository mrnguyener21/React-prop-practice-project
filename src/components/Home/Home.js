import React from 'react';

import Cards from '../Cards/Cards';
import yugioh from '../../images/yugioh.png';
import styles from './Home.module.css';

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