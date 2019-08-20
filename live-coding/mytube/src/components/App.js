import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './Header';
import SearchPage from './SearchPage';
import HomePage from './HomePage';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/search" component={SearchPage} />
    </div>
    </Router>
  );
}

export default App;
