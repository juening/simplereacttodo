import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { withStyles } from '@material-ui/core/styles';

import styles from '../styles/HeaderStyles';
import { auth } from '../firebase/firebase';
import { clearTodos } from '../redux/todo/todoActions';

const Header = ({ currentUser, classes, clearTodos }) => {
  const signOut = () => {
    auth.signOut();
    clearTodos();
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.header}>
        <Toolbar>
          <Typography className={classes.title}>Todo App with React</Typography>
          {currentUser ? (
            <div className={classes.option} onClick={signOut}>
              SIGN OUT
            </div>
          ) : (
            <div className={classes.options}>
              <Link to="/signin" className={classes.option}>
                SIGN IN
              </Link>
              <Link to="/signup" className={classes.option}>
                SIGN UP
              </Link>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  clearTodos: () => dispatch(clearTodos()),
});

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Header)
);
