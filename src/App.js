import React from 'react';
import Cards from './Cards/Cards';
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

//download react-router
// create a folder for monster, spell and trap along with a card cards and data .js for each one
//link the files to app.js
//once the pages have been succesfully routed and link to app.js begin to style the page 
