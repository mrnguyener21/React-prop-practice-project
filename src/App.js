import React from 'react';
import Cards from './components/Cards/Cards';
import yugioh from './images/yugioh.png';
import styles from './App.module.css';

const App = () =>{
    return (
        <div className = {styles.Container}>
            <img className={styles.logo} src = {yugioh} alt='image' /> 
            {/* why did this need to be an img tag but in the Cards components we were able to just name it image? */}
            <div className={styles.intro}>Below are the 4 basic categories</div>
            <Cards/>
        </div>
    )
};

export default App;

//so is the app.js file not the "body" of the file?