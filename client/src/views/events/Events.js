import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Box, Button, Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import CreateModal from './Create';

const localizer = momentLocalizer(moment);

const apiURL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
const Events = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [events, setEvents] = useState([]);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    getDataEvents();
  };

  useEffect(() => {
    getDataEvents();
  }, []);

  const getDataEvents = async () => {
    try {
      const response = await fetch(`${apiURL}/events`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${localStorage.getItem('token')}`,
        }
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data);
      }

      const parsedEvents = data.map(event => ({
        ...event,
        start: new Date(event.date),
        end: new Date(event.date),
      }));

      setEvents(parsedEvents);
    } catch (error) {
      console.error('Error: ', error);
    }
  };

  const customEvent = ({ event }) => (
    <div>
      <div>{event.email}</div>
    </div>
  );

  const customAgenda = ({ event }) => (
    <div>
      <div>{event.email}</div>
      <div>{event.description}</div>
    </div>
  );

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
          components={{
            event: customEvent,
            agenda: {
              event: customAgenda
            }
          }}
        />
      </Box>
    </PageContainer>
  );
};

export default Events;
