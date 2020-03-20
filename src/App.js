import React from 'react';
import Cards from './components/Cards/Cards';
import yugioh from './images/yugioh.png';
import wallpaper from './images/wallpaper.jpg';
import styles from './App.module.css';

const App = () =>{
    return (
        <div className = {styles.Container}>
            <img className={styles.logo} src = {yugioh} alt='image' /> 
            {/* why did this need to be an img tag but in the Cards components we were able to just name it image? */}
            <div>Below are the 4 basic card types in Yu-Gi-Oh</div>
            <Cards/>
        </div>
    )
};

export default App;

//so is the app.js file not the "body" of the file?