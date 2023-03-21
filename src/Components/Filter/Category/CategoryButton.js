import React from 'react';
import Box from '@mui/system/Box';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function CategoryButton(props) {
  const { action, element } = props;

  const handleChange = () => {
    action(element.toLowerCase());
  };

  return (
    <Box>
      <FormControlLabel
        control={
          <Radio
            sx={{
              color: 'white',
              '&.Mui-checked': {
                color: 'white',
              },
            }}
          />
        }
        checked={element?.toLowerCase() === localStorage.getItem('category')}
        label={element}
        value={element}
        onChange={handleChange}
        sx={{
          color: 'white',
        }}
      />
    </Box>
  );
}
