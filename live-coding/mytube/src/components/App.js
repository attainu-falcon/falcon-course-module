import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import SearchPage from './SearchPage';
import Profile from './Profile';
import Player from './Player';

function App(props) {
  console.log(props);
  return (
    <Router>
      {props.loggedIn ?
        <div className="App">
          <Header />
          <Route path="/" exact={true} component={Home} />
          <Route path="/search" component={SearchPage} />
          <Route path="/profile" render={(childProps) => <Profile {...childProps} name={props.loggedIn.name} />} />
          <Route path="/watch/:videoId" component={Player} />
        </div> :
        <div className="App">
          <Header hideLogout={true} />
        </div>
      }
    </Router>
  );
}

function mapStateToProps(state) {
  return {loggedIn: state.loginReducer.loggedIn};
}

export default connect(mapStateToProps)(App);