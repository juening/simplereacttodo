import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

const SignIn = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Paper>
      <form onSubmit={handleSubmit}>
        <TextField
          type="email"
          value={email}
          name="email"
          onChange={handleChange}
          label="Your email"
        />
        <TextField
          type="password"
          value={password}
          name="password"
          onChange={handleChange}
          label="Your password"
        />
        <button type="submit">Sign In</button>
      </form>
      <hr />
      <button>Sign In with Google</button>
    </Paper>
  );
};

export default SignIn;
