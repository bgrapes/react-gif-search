import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Redirect } from 'react-router-dom';
import { history } from './../store/configureStore';
import { connect } from 'react-redux';

import Header from '../containers/Header';
import Home from '../containers/Home';
import Signup from '../containers/Signup';
import Login from '../containers/Login';
import Favorites from '../containers/Favorites';

// PrivateRoutes are restricted to authenticated users
const PrivateRoute = ({component: Component, authenticated, ...props}) => {
  return (
    <Route
      {...props}
      render={(props) =>
        authenticated === true // Check whether user is authenticated
        ? <Component {...props} /> // Return the component we are passing in as an argument
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />} /> // Or redirect user 
  );
};

// PublicRoutes are restricted to users who aren't logged in
const PublicRoute = ({component: Component, authenticated, ...props}) => {
  return (
    <Route
      {...props}
      render={(props) =>
        authenticated === false
        ? <Component {...props} />
        : <Redirect to='/favorites' />} />
  );
}

class App extends React.Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <div>
          <Header />

          <div className="container">
            <Route exact path="/" component={ Home } />
            {/*
              Use our PublicRoutes instead of vanilla Routes
              Also pass in whether the user is authenticated from the store
            */}
            <PublicRoute authenticated={this.props.authenticated} path="/signup" component={ Signup } />
            <PublicRoute authenticated={this.props.authenticated} path="/login" component={ Login } />
            <PrivateRoute authenticated={this.props.authenticated} path="/favorites" component={ Favorites } />
          </div>
        </div>
      </ConnectedRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return { authenticated: state.auth.authenticated };
};

export default connect(mapStateToProps)(App);