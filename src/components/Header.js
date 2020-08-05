import React from 'react';
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { withStyles } from '@material-ui/core/styles';

import styles from '../styles/HeaderStyles';
import { auth } from '../firebase/firebase';

const Header = ({ currentUser, classes }) => {
  return (
    <div className={classes.root}>
      <AppBar className={classes.header}>
        <Toolbar>
          <Typography className={classes.title}>Todo App with React</Typography>
          {currentUser ? (
            <div className={classes.option} onClick={() => auth.signOut()}>
              SIGN OUT
            </div>
          ) : (
            <Link to="/signin" className={classes.option}>
              SIGN IN
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(Header);
