import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { auth } from '../firebase/firebase';
import { setCurrentUser } from '../redux/user/userActions';

import styles from '../styles/HomeStyles';
import Home from './Home';
import SignIn from './SignIn';

class TodoApp extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      console.log(userAuth);

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root} elevation={0}>
        <Grid container justify="center">
          <Grid item xs={11} md={8} lg={6}>
            <AppBar className={classes.header}>
              <Toolbar>
                <Typography>Todo App with React</Typography>
              </Toolbar>
            </AppBar>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                exact
                path="/signin"
                render={() =>
                  this.props.currentUser ? <Redirect to="/" /> : <SignIn />
                }
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
  setCurrentUser: (user) => dispatch(setCurrentUser),
});

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(TodoApp)
);
