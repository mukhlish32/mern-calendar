import React, { useState } from 'react';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Box, Button, Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import CreateModal from './Create';

const localizer = momentLocalizer(moment);

const events = [
  {
    email: 'agung@gmail.com',
    date: new Date('2024-04-19T10:00:00'),
    description: 'Meeting',
  },
  {
    email: 'mukhlish.syarif@gmail.com',
    date: new Date('2024-04-19T12:00:00'),
    description: 'Lunch',
  },
];

const CustomEvent = ({ event }) => (
  <div>
    <div>{event.email}</div>
  </div>
);

const Events = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <PageContainer title="Index">
      <Box style={{ height: 500, margin: '50px' }}>
        <Box
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '10px'
          }}
        >
          <Typography variant="h2">
            Big Calendar
          </Typography>
          <Button
            variant="contained"
            color="primary"
            style={{ width: '19%' }}
            onClick={handleModalOpen}
          >
            Create
          </Button>
        </Box>
        <CreateModal isOpen={isModalOpen} onClose={handleModalClose} />
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="date"
          endAccessor="date"
          components={{
            event: CustomEvent
          }}
        />
      </Box>
    </PageContainer>
  );
};

export default Events;
