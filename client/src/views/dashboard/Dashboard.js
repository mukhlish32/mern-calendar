import React from 'react';
import { Grid, Box } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard">
      <Box>
        <Grid container spacing={3}>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Dashboard;
