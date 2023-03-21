import React from 'react';
import Box from '@mui/material/Box';

export default function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '64px',
        backgroundColor: '#802c6e',
        color: 'white',
      }}
    >
      &copy; 2023 Fake Store | All rights reserved
    </Box>
  );
}
