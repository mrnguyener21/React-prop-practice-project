import React from 'react'; //importing react
import Cards from '../Cards/Cards'; //importing data from cards component
import styles from './Home.module.css';//importing styles



const Home = () => {
    return (
      <div className = {styles.Container}>
        <div className={styles.intro}>Below are the 3 basic categories</div>
        <Cards/>
      </div>
    )
};

export default Home;