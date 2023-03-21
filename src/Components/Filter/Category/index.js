import React from 'react';
import { useSearchParams } from 'react-router-dom';
import CategoryButton from './CategoryButton';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';

export default function Category(props) {
  const { expandedCategory, handleExpandedCategory, setCategoryValue } = props;

  const categoryList = [
    "Men's clothing",
    "Women's clothing",
    'Electronics',
    'Jewelery',
  ];

  const [queryParams, setQueryParamas] = useSearchParams();

  const handleCategoryChange = (e) => {
    localStorage.setItem('category', e.target.value.toLowerCase());

    setQueryParamas({
      ...queryParams,
      category:
        localStorage.getItem('category') === null
          ? ''
          : localStorage.getItem('category'),
    });
  };

  return (
    <Accordion
      sx={{ mb: 2, color: 'white', backgroundColor: '#802c6e' }}
      expanded={expandedCategory}
      onChange={handleExpandedCategory}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography component={'span'} sx={{ fontWeight: 'bold' }}>
          Category
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography component={'span'}>
          <FormControl onChange={handleCategoryChange}>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              sx={{ display: 'block' }}
            >
              {categoryList.map((element, index) => (
                <CategoryButton
                  key={index}
                  action={setCategoryValue}
                  element={element}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
