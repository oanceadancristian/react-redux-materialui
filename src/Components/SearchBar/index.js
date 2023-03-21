import React, { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/system/Stack';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

export default function Search(props) {
  const searchRef = useRef();

  const { setSearchProduct } = props;

  const handleChange = (e) => {
    setSearchProduct(e.target.value);
  };

  const [searchProductIconColor, setSearchProductIconColor] = useState('gray');

  const handleSearchProductBlur = () => {
    setSearchProductIconColor('gray');
  };

  const handleSearchProductFocus = () => {
    setSearchProductIconColor('black');
  };

  return (
    <Stack
      direction="row"
      justifyContent="center"
      sx={{
        gap: 2,
      }}
    >
      <Box
        sx={{
          width: '750px',
          maxWidth: '75%',
        }}
      >
        <TextField
          placeholder="Search for product"
          fullWidth
          id="fullWidth"
          inputRef={searchRef}
          onChange={handleChange}
          onBlur={handleSearchProductBlur}
          onFocus={handleSearchProductFocus}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: searchProductIconColor }} />
              </InputAdornment>
            ),
          }}
          sx={{
            '& label': {
              fontWeight: '600',
            },
            '& .MuiOutlinedInput-root': {
              fontFamily: 'monospace',
              '&.Mui-focused fieldset': {
                borderColor: 'black',
              },
            },
          }}
        />
      </Box>
    </Stack>
  );
}
