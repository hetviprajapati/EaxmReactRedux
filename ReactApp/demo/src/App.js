import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

import Home from './Container/Home/Home'
import Movie from './Container/Movie/Movie'
import Ticket from './Container/Ticket/Ticket'
class App extends React.Component {
  render(){
     return (
      <Router>
          <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/movie" component={Movie} />
                <Route exact path="/ticket" component={Ticket} />
           </Switch>
       </Router>
  );
  }
}

export default App;
