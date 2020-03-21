import React from 'react';
import {browserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Cards from './Cards/Cards';
import Monster from './Monster/Monster';
import Spell from './Spell/Spell';
import Trap from './Trap/Trap';


import yugioh from './images/yugioh.png';
import styles from './App.module.css';




const App = () =>{
    return (
        <div className = {styles.Container}>
            <img className={styles.logo} src = {yugioh} alt='image' /> 
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
// import {browserRouter as Router, Switch, Route, Link} Write notes on what each one is for