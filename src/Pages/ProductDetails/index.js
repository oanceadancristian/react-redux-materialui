import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProductDetails } from '../../Components/Slices/ProductDetailsSlice';
import { useParams } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import AccessForbidden from '../../Components/AccessForbidden';
import Footer from '../../Components/Footer';
import axios from 'axios';
import { AuthContext } from '../../Context/Auth/AuthContext';
import { CartContext } from '../../Context/Cart/CartContext';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import './ProductDetails.css';

export default function ProductDetails() {
  const { authToken } = useContext(AuthContext);

  const { cart, setCart } = useContext(CartContext);

  const details = useSelector((state) => state.productDetailsSlice);

  const { productDetails } = details;

  const dispatch = useDispatch();

  const params = useParams();
  const { productId } = params;

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        const { status, data } = response;
        if (status === 200) {
          setLoading(false);
          dispatch(setProductDetails(data));
        }
      })
      .catch((error) => {
        if (error.response) {
          setLoading(false);
          setError('No details found');
        } else if (error.request) {
          setLoading(false);
          setError('No response received');
        } else {
          setLoading(false);
          setError(error.message);
        }
      });
  }, [productId, dispatch]);

  function capitalzieProductCategory() {
    const productCategory = productDetails.category;
    const firstLetter = productCategory?.charAt(0).toUpperCase() || '';
    const restOfProductCategory = productCategory?.slice(1) || '';
    return firstLetter + restOfProductCategory;
  }

  const [quantity, setQuantity] = useState(1);

  function decrementQuantity() {
    if (quantity >= 1) setQuantity(quantity - 1);
  }

  function incrementQuantity() {
    setQuantity(quantity + 1);
  }

  function handleClick() {
    for (let i = 1; i <= quantity; i++) {
      setCart((previousCart) => [...previousCart, productDetails]);
    }
  }

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh' }}>
      <Box sx={{ pb: 5 }}>
        <Backdrop
          sx={{ color: '#802c6e', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <Navbar />
        {authToken && !error && (
          <Stack direction="row" sx={{ mx: 15, my: 15, gap: '92px' }}>
            <img
              src={productDetails.image}
              alt={productDetails.title}
              className="product-details-image"
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography sx={{ mb: 1, fontWeight: 'bold' }}>
                {productDetails.title}
              </Typography>
              <Typography sx={{ mb: 2.5 }}>
                {capitalzieProductCategory()}
              </Typography>
              <Box sx={{ mb: 2.5 }}>
                <Rating
                  name="readonly-rating"
                  value={productDetails.rating?.rate || 0}
                  precision={0.1}
                  readOnly
                />
                <Typography sx={{ fontStyle: 'italic' }}>
                  {productDetails.rating?.rate} / 5 out of{' '}
                  {productDetails.rating?.count} reviews
                </Typography>
              </Box>
              <Typography sx={{ mb: 2.5 }}>
                {productDetails.description}
              </Typography>
              <Typography sx={{ mb: 2.5, fontWeight: 'bold' }}>
                &euro;{productDetails.price}
              </Typography>
              <Typography sx={{ my: 1 }}>Quantity</Typography>
              <Button
                sx={{
                  minWidth: { xs: '32px', md: '48px', lg: '64px' },
                  backgroundColor: 'lightgray',
                  color: 'black',
                  '&:hover': {
                    backgroundColor: 'darkgray',
                    boxShadow: 'none',
                  },
                }}
                onClick={decrementQuantity}
              >
                -
              </Button>
              <Typography sx={{ px: 1, display: 'inline-block' }}>
                {quantity}
              </Typography>
              <Button
                sx={{
                  minWidth: { xs: '32px', md: '48px', lg: '64px' },
                  backgroundColor: 'lightgray',
                  color: 'black',
                  '&:hover': {
                    backgroundColor: 'darkgray',
                    boxShadow: 'none',
                  },
                }}
                onClick={incrementQuantity}
              >
                +
              </Button>
              <Button
                sx={{
                  width: '200px',
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
            </Box>
          </Stack>
        )}
        {authToken && error && (
          <Typography
            variant="h5"
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              textTransform: 'uppercase',
              color: 'black',
            }}
          >
            {error}
          </Typography>
        )}
        {!authToken && <AccessForbidden />}
        <Footer />
      </Box>
    </Box>
  );
}
