import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Stack
} from '@mui/material';

import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';

const apiURL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
const AuthLogin = ({ title, subtitle, subtext }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${apiURL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        setError(data.message);
      } else {
        const token = data.token;
        localStorage.setItem('token', token);

        window.location.href = '/dashboard';
      }
    } catch (err) {
      console.error('Error: ', err);
      setError('Login gagal. Terdapat gangguan pada server.');
    }
  };


  return (
    <>
      {title ? (
        <Typography fontWeight="700" variant="h2" mb={1}>
          {title}
        </Typography>
      ) : null}

      {subtext}

      <form onSubmit={handleSubmit}>
        <Stack>
          <Box>
            <Typography variant="subtitle1" fontWeight={600} component="label" htmlFor='username' mb="5px">Username</Typography>
            <CustomTextField id="username" variant="outlined" fullWidth value={username} onChange={(e) => setUsername(e.target.value)} required />
          </Box>
          <Box mt="25px">
            <Typography variant="subtitle1"
              fontWeight={600} component="label" htmlFor='password' mb="5px" >Password</Typography>
            <CustomTextField id="password" type="password" variant="outlined" fullWidth value={password} onChange={(e) => setPassword(e.target.value)} required />
          </Box>
          <Stack justifyContent="space-between" direction="row" alignItems="center" my={2}>
            {error && (
              <Typography color="error" variant="body2">
                {error}
              </Typography>
            )}
          </Stack>
        </Stack>
        <Box>
          <Button
            color="primary"
            variant="contained"
            size="large"
            fullWidth
            type="submit"
          >
            LOGIN
          </Button>
        </Box>
      </form>
      {subtitle}
    </>
  );
};

export default AuthLogin;
