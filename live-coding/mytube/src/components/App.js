import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import SearchPage from './SearchPage';
import Profile from './Profile';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Route path="/" exact={true} component={Home} />
      <Route path="/search" component={SearchPage} />
      <Route path="/profile" component={Profile} />
    </div>
    </Router>
  );
}

export default App;
