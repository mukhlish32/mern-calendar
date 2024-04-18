import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button, Grid, Stack } from '@mui/material';
import Swal from 'sweetalert2';

const apiURL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
const Create = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const eventData = {
      email: email,
      date: date,
      description: description
    };

    try {
      const response = await fetch(`${apiURL}/events`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(eventData)
      });

      const data = await response.json();
      console.log(data);
      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Event berhasil disimpan',
          showConfirmButton: false,
          timer: 1500
        });
        onClose();
      } else {
        setError(data.message);
      }
    } catch (err) {
      console.error('Error: ', err);
      setError('Terdapat gangguan pada server.');
    }
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'white',
            boxShadow: 24,
            p: 4,
            minWidth: '45%',
            minHeight: '40%',
            borderRadius: 4,
            textAlign: 'center'
          }}
        >
          <Typography variant="h5" mb={3} sx={{ textAlign: 'left' }}>
            Create
          </Typography>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box display="flex" alignItems="center" justifyContent="left" mb={2}>
                <Typography variant="subtitle1" mr={2} sx={{ width: 100, textAlign: 'right', pr: 2 }}>
                  Email
                </Typography>
                <TextField variant="outlined" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} required />
              </Box>
              <Box display="flex" alignItems="center" justifyContent="left" mb={2}>
                <Typography variant="subtitle1" mr={2} sx={{ width: 100, textAlign: 'right', pr: 2 }}>
                  Date
                </Typography>
                <TextField variant="outlined" fullWidth type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
              </Box>
              <Box mb={2}>
                <Typography variant="subtitle1">Description</Typography>
                <TextField variant="outlined" multiline rows={4} fullWidth value={description} onChange={(e) => setDescription(e.target.value)} required />
              </Box>
              <Stack justifyContent="space-between" direction="row" alignItems="center" my={2}>
                {error && (
                  <Typography color="error" variant="body2">
                    Error: {error}
                  </Typography>
                )}
              </Stack>
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            style={{
              position: 'absolute',
              bottom: 30,
              right: 32,
              width: '25%'
            }}
            type="submit"
          >
            Submit
          </Button>
        </Box>
      </form>
    </Modal>
  );
};

export default Create;
