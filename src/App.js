import React from 'react';
import Posts from './Components/Posts/Posts';
import './App.css'

const App = () =>(
    <div className='main-container'>
        <h1 className='Main-heading'> Breaking Weather News</h1>
        <Posts/> 
    </div>
);
export default App;

//QUESTIONS
// 1) WHY ARE WE NOT USING CURLY BRACKETS FOR THE App
    // because we are only return so the curly brackets can be ommitted
// 2) why do we not use a return
    // -cause arrow function already has an auto return duh
// 3) why is it import Posts from './Components/Posts/Posts' and not import Posts from './Components/Posts';
    // cause it's in the file duh