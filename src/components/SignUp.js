import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import { auth, createUserProfileDocument } from '../firebase/firebase';

import styles from '../styles/SignUpStyles';

class SignUp extends Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    const { classes } = this.props;

    return (
      <Grid container>
        <CssBaseline />
        <Grid item>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form onSubmit={this.handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="dispayName"
              label="Display Name"
              name="displayName"
              value={displayName}
              onChange={this.handleChange}
              autoComplete="display-name"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              type="email"
              id="email"
              label="Email Address"
              name="email"
              value={email}
              onChange={this.handleChange}
              autoComplete="email"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              type="password"
              id="password"
              label="Password"
              name="password"
              value={password}
              onChange={this.handleChange}
              autoComplete="current-password"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              type="password"
              id="confirmPassword"
              label="Confirm Password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={this.handleChange}
              autoComplete="confirm-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
          </form>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(SignUp);
