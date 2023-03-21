import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect(props) {
  const { priceValue, setPriceValue } = props;

  const handleChange = (e) => {
    setPriceValue(e.target.value);
  };

  return (
    <Box sx={{ width: '750px', maxWidth: '100%' }}>
      <FormControl fullWidth>
        <InputLabel
          id="demo-simple-select-label"
          sx={{
            '&.Mui-focused': {
              color: 'black',
            },
          }}
        >
          Sort by price
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Sort by price"
          value={priceValue}
          onChange={handleChange}
          sx={{
            backgroundColor: 'white',
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'black',
            },
          }}
        >
          <MenuItem value={'ascending-price'}>Low to high</MenuItem>
          <MenuItem value={'descending-price'}>High to low</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
