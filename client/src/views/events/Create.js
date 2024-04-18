import React from 'react';
import { Modal, Box, Typography, TextField, Button, Grid, Stack } from '@mui/material';

const CreateEventModal = ({ isOpen, onClose }) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
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
              <TextField variant="outlined" fullWidth />
            </Box>
            <Box display="flex" alignItems="center" justifyContent="left" mb={2}>
              <Typography variant="subtitle1" mr={2} sx={{ width: 100, textAlign: 'right', pr: 2 }}>
                Date
              </Typography>
              <TextField variant="outlined" fullWidth />
            </Box>
            <Box mb={2}>
              <Typography variant="subtitle1">Description</Typography>
              <TextField variant="outlined" multiline rows={4} fullWidth />
            </Box>
          </Grid>
          <Grid></Grid>
        </Grid>
        <Button
          variant="contained"
          color="primary"
          style={{ 
            position: 'absolute', 
            bottom: 30, 
            right: 32, 
            width: '25%'}}
          onClick={onClose}
        >
          Save
        </Button>
        <Stack justifyContent="space-between" direction="row" alignItems="center" my={2}></Stack>
      </Box>
    </Modal>
  );
};

export default CreateEventModal;
