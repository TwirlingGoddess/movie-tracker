import React from 'react';
import { Route, Redirect, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleLogin } from '../../actions';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';

const Header = props => {
  const showDefaultState = (
    <div>
      <NavLink to="/login">
        <button>Login</button>
      </NavLink>
      <NavLink to="/signup">
        <button>Sign Up</button>
      </NavLink>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
    </div>
  );

  const showLoggedInState = (
    <div>
      <p>Welcome back props.userName</p>
      <button onClick={props.toggleLogin}>Log Out</button>
    </div>
  );

  return (
    <header>
      <NavLink to="/">
        <h1>MOVIE TRACKER</h1>
      </NavLink>
      {props.loggedIn ? (
        <div>
          {showLoggedInState}
          <Redirect to="/" />
        </div>
      ) : (
        showDefaultState
      )}
    </header>
  );
};

export const mapStateToProps = state => ({
  loggedIn: state.users.loggedIn
});

export const mapDispatchToProps = dispatch => ({
  toggleLogin: () => dispatch(toggleLogin())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
