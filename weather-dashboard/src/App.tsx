import React, { useState, useEffect } from 'react';
import { Box, Button, Grid, Typography, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import WeatherWidget from './WeatherWidget';
import { TempProvider } from './TempContext';

const App: React.FC = () => {
  const [widgets, setWidgets] = useState<number[]>([]);

  // Load state from localStorage
  useEffect(() => {
    const savedWidgets = localStorage.getItem('widgets');
    if (savedWidgets) {
      setWidgets(JSON.parse(savedWidgets));
    }
  }, []);

  // Save state to localStorage
  useEffect(() => {
    localStorage.setItem('widgets', JSON.stringify(widgets));
  }, [widgets]);

  const addWidget = () => {
    setWidgets([...widgets, widgets.length + 1]);
  };

  const removeWidget = (id: number) => {
    setWidgets(widgets.filter(widgetId => widgetId !== id));
  };

  return (
  <TempProvider>
    <Box p={2}>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={addWidget}
      >
        Add Widget
      </Button>

      <Grid container spacing={2} mt={2}>
        {widgets.map((id) => (
          <Grid item xs={12} sm={6} md={4} key={id}>
            <WeatherWidget id={id} removeWidget={() => removeWidget(id)} />
          </Grid>
        ))}
      </Grid>
    </Box>
    </TempProvider>
  );
};

export default App;
