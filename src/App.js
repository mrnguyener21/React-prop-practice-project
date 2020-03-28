import React from "react"; 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; 
import Home from './components/Home/Home'; 
import DetailedCards from './components/DetailedCards/DetailedCards';
import styles from './App.module.css'
import yugioh from './images/yugioh.png';

const App = () => {
  return (
    <Router> 
            <img className={styles.logo} src={yugioh} alt='image' />
        <Switch>
          <Route path="/monsters"render={(props) => <DetailedCards {...props} type='monsters' />} />
          <Route path="/spells"render={(props) => <DetailedCards {...props} type='spells' />} /> 
          <Route path="/traps"render={(props) => <DetailedCards {...props} type='traps' />} />
          <Route path="/"><Home /></Route>
        </Switch>

    </Router>

  );
}
export default App;

