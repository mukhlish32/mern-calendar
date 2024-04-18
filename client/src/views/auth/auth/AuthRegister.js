import React, { useState } from 'react';
import { Typography, Button } from '@mui/material';
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import { Stack } from '@mui/system';
import Swal from 'sweetalert2';

const apiURL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
const AuthRegister = ({ title, subtitle, subtext }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${apiURL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
      });

      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        setError(data.message);
      } else {
        Swal.fire({
          icon: 'success',
          title: 'User berhasil disimpan',
          showConfirmButton: false,
          timer: 1500
        });
        setUsername('');
        setEmail('');
        setPassword('');
        window.location.href = '/login';
      }
    } catch (err) {
      console.error('Error: ', err);
      setError('Registrasi gagal. Mohon dicoba kembali.');
    }
  };

  return (
    <>
      {title && (
        <Typography fontWeight="700" variant="h2" mb={1}>
          {title}
        </Typography>
      )}

      {subtext}

      <form onSubmit={handleSubmit}>
        <Stack mb={3}>
          <Typography variant="subtitle1" fontWeight={600} component="label" htmlFor='username' mb="5px">Username</Typography>
          <CustomTextField id="username" variant="outlined" fullWidth value={username} onChange={(e) => setUsername(e.target.value)} required />

          <Typography variant="subtitle1" fontWeight={600} component="label" htmlFor='email' mb="5px" mt="25px">Email</Typography>
          <CustomTextField id="email" variant="outlined" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} required />

          <Typography variant="subtitle1" fontWeight={600} component="label" htmlFor='password' mb="5px" mt="25px">Password</Typography>
          <CustomTextField id="password" type="password" variant="outlined" fullWidth value={password} onChange={(e) => setPassword(e.target.value)} required />
        </Stack>
        {error && (
          <Typography color="error" variant="body2" mb={2}>
            Error: {error}
          </Typography>
        )}
        <Button color="primary" variant="contained" size="large" fullWidth type="submit">
          Daftar
        </Button>
      </form>
      {subtitle}
    </>
  );
};

export default AuthRegister;
