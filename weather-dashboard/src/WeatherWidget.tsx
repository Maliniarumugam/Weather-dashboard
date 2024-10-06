import React from 'react';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface WeatherWidgetProps {
  id: number;
  removeWidget: () => void;
}

const WeatherWidget: React.FC<WeatherWidgetProps> = ({ id, removeWidget }) => {
  const temperature = 22; // hardcoded for now
  const weatherCondition = "Sunny";

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">New York</Typography>
        <Typography variant="body1">{temperature}°C</Typography>
        <Typography variant="body2">{weatherCondition}</Typography>
        <IconButton onClick={removeWidget}>
          <DeleteIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default WeatherWidget;
