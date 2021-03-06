import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { auth, createUserProfileDocument } from '../firebase/firebase';
import { setCurrentUser } from '../redux/user/userActions';

import styles from '../styles/HomeStyles';
import Home from './Home';
import Header from './Header';
import SignIn from './SignIn';
import SignUp from './SignUp';

class TodoApp extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) =>
          setCurrentUser({ id: snapshot.id, ...snapshot.data() })
        );
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { classes, currentUser } = this.props;
    return (
      <Paper className={classes.root} elevation={0}>
        <Grid container justify="center">
          <Grid item xs={11} md={8} lg={6}>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                exact
                path="/signin"
                render={() => (currentUser ? <Redirect to="/" /> : <SignIn />)}
              />
              <Route
                exact
                path="/signup"
                render={() => (currentUser ? <Redirect to="/" /> : <SignUp />)}
              />
            </Switch>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(TodoApp)
);
