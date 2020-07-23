import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';

import styles from '../styles/HomeStyles';

const Home = ({ classes }) => {
  return (
    <Paper className={classes.root} elevation={0}>
      <Grid container justify="center">
        <Grid item xs={11} md={8} lg={6}>
          <AppBar position="static" color="primary" style={{ height: '64px' }}>
            <Toolbar>
              <Typography>Todo App with React</Typography>
            </Toolbar>
          </AppBar>
          <NewTodoForm />
          <TodoList />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default withStyles(styles)(Home);
