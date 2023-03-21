import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Category from './Category';
import Sort from './Sort';
import Box from '@mui/system/Box';
import Stack from '@mui/system/Stack';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';

export default function Filter(props) {
  const { setCategoryValue, priceValue, setPriceValue } = props;

  const [queryParams, setQueryParamas] = useSearchParams();

  const [expandedCategory, setExpandedCategory] = useState(
    queryParams.get('category') !== null && queryParams.get('category') !== ''
  );

  const handleExpandedCategory = () => {
    setExpandedCategory(!expandedCategory);
  };

  const handleClick = () => {
    setExpandedCategory(false);
    setQueryParamas('');
    localStorage.removeItem('category');
    setCategoryValue('');
    setPriceValue('');
  };

  return (
    <Box
      sx={{
        fontWeight: 'bold',
        textAlign: 'center',
        width: '750px',
        maxWidth: '100%',
      }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        sx={{
          mb: 2,
          p: 2,
          fontSize: '18px',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          color: 'white',
          backgroundColor: '#802c6e',
        }}
      >
        <FilterAltIcon fontSize="medium" sx={{ mr: 0.5 }} />
        Filters
      </Stack>
      <Box>
        <Category
          expandedCategory={expandedCategory}
          handleExpandedCategory={handleExpandedCategory}
          setCategoryValue={setCategoryValue}
        />
        <Sort priceValue={priceValue} setPriceValue={setPriceValue} />
      </Box>
      <Box
        sx={{
          mt: 2,
          p: 2,
          fontSize: '16px',
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          color: 'white',
          backgroundColor: '#802c6e',
        }}
      >
        <Stack
          direction="row"
          justifyContent="center"
          component="span"
          onClick={handleClick}
          sx={{
            fontWeight: 'normal',
            textDecoration: 'underline',
            cursor: 'pointer',
            color: 'white',
            '&:hover': {
              color: '#adadad',
            },
          }}
        >
          <FilterAltOffIcon fontSize="medium" sx={{ mr: 0.5 }} />
          Clear filters
        </Stack>
      </Box>
    </Box>
  );
}
