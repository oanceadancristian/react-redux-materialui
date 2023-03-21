import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import BugReportIcon from '@mui/icons-material/BugReport';

export default function AccessForbidden() {
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
          403
        </Typography>
      </Stack>
      <Box sx={{ textAlign: 'center' }}>
        <Typography
          variant="h4"
          mb={2}
          sx={{ textAlign: 'center', textTransform: 'uppercase' }}
        >
          Access forbidden
        </Typography>
        <Typography variant="p" sx={{ textAlign: 'center', fontSize: '20px' }}>
          We're sorry, you don't have access to the page you requested.
        </Typography>
      </Box>
    </Box>
  );
}
