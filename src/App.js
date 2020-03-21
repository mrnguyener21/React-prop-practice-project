import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './components/Home/Home';
import DetailedCards from './components/DetailedCards/DetailedCards';

const App = () => {
  return (
    <Router>
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