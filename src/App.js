import React from "react"; //importing react module
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; //imoorting react-router module*allows app to become multipage*

import Home from './components/Home/Home'; //importing our Home.js file aka our homepage
import DetailedCards from './components/DetailedCards/DetailedCards'; //importing our detailedcards.js file aka our file givin the description of each type of card in the monster page, spell page and trap page

const App = () => {
  return (
    <Router> //this tag allows us to use our router dom and it's called router instead of BrowserRouter since we set it "as router" when we imported it
        <Switch>// the switch tag allows the app to go back and forth between pages when we refresh or press back etc
          <Route path="/monsters"render={(props) => <DetailedCards {...props} type='monsters' />} />
          {/* // here we are routing a path to the /monster page and we are matching it when the props "type" is equalled to 'monsters' in the detailedcards.js file */}
          <Route path="/spells"render={(props) => <DetailedCards {...props} type='spells' />} /> 
          {/* // here we are routing a path to the /spells page and we are matching it when the props "type" is equalled to 'spells' in the detailedcards.js file */}
          <Route path="/traps"render={(props) => <DetailedCards {...props} type='traps' />} />
          {/* // here we are routing a path to the /traps page and we are matching it when the props "type" is equalled to 'traps' in the detailedcards.js file */}
          <Route path="/"><Home /></Route>
        </Switch>
    </Router>
  );
}
export default App; //exporting the Apps component

// something.Map((card/*this is the data*/) => {
//   return /*then we passed the data as a prop to the component here*/
//   <Card /*this is a prop => */ title='string' description='test1' />
// };

// const Card = (props) => {
//   console.log(props); 
//   // { 
//   //   title: 'string', 
//   //   description:'test1' 
//   // }
// }