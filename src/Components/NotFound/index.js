import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import BugReportIcon from '@mui/icons-material/BugReport';

export default function PageNotFound() {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <Stack direction="row" justifyContent="center" sx={{ color: '#802c6e' }}>
        {' '}
        <BugReportIcon sx={{ fontSize: '50px' }} />
        <Typography variant="h3" mb={2}>
          404
        </Typography>
      </Stack>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h4" mb={2} sx={{ textTransform: 'uppercase' }}>
          Page not found
        </Typography>
        <Typography variant="p" sx={{ fontSize: '20px' }}>
          We're sorry, the page you requested could not be found.
        </Typography>
      </Box>
    </Box>
  );
}
