import React, { useContext } from 'react';
import { CartContext } from '../../Context/Cart/CartContext';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import './ProductCard.css';

export default function ProductCard(props) {
  const { product } = props;

  const { cart, setCart } = useContext(CartContext);

  function handleClick() {
    setCart([...cart, product]);
  }

  return (
    <Paper
      elevation={3}
      sx={{
        p: 2.5,
        height: '500px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        ':hover': {
          boxShadow: 10,
        },
      }}
    >
      {' '}
      <Link
        href={`/products/${product?.id}`}
        sx={{
          textDecoration: 'none',
        }}
      >
        <Typography
          role="product-title"
          sx={{ textAlign: 'center', fontWeight: 'bold', color: 'black' }}
        >
          {product?.title}
        </Typography>
      </Link>
      <Link
        href={`/products/${product?.id}`}
        sx={{
          textDecoration: 'none',
        }}
      >
        <Box>
          <img
            src={product?.image}
            alt={product?.title}
            className="product-image"
          />
        </Box>
      </Link>
      <Link
        href={`/products/${product?.id}`}
        sx={{
          textDecoration: 'none',
        }}
      >
        <Typography
          role="product-price"
          sx={{ fontWeight: 'bold', color: '#757575' }}
        >
          &euro;{product?.price}
        </Typography>
      </Link>
      <Button
        sx={{
          width: '100%',
          backgroundColor: '#802c6e',
          color: 'white',
          '&:hover': {
            backgroundColor: '#983482',
            boxShadow: 'none',
          },
        }}
        onClick={handleClick}
      >
        Add to cart
      </Button>
    </Paper>
  );
}
