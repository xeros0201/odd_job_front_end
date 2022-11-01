import React from 'react';
import { Box, Button, Typography } from '@mui/material';
 
import { useNavigate } from 'react-router-dom';

 

export default function Error() {

const navigate = useNavigate()
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundImage: "linear-gradient(to right,#ea580c,#fdba74,#f87171)",
        
      }}
    >
      <Typography variant="h1" style={{ color: 'white' }}>
        404
      </Typography>
      <Typography variant="h6" style={{ color: 'white' }}>
        The page you’re looking for doesn’t exist.
      </Typography>
      <Button onClick={()=>navigate('/')} color="warning" variant="contained">Back Home</Button>
    </Box>
  );
}