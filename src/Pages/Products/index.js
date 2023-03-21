import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProductsList } from '../../Components/Slices/ProductsListSlice';
import axios from 'axios';
import { AuthContext } from '../../Context/Auth/AuthContext';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import ProductCard from '../../Components/ProductCard';
import SearchBar from '../../Components/SearchBar';
import Filter from '../../Components/Filter';
import AccessForbidden from '../../Components/AccessForbidden';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function Homepage() {
  const { authToken } = useContext(AuthContext);

  const products = useSelector((state) => state.productsListSlice);

  const { productsList } = products;

  const dispatch = useDispatch();

  const [categoryValue, setCategoryValue] = useState('');

  const [priceValue, setPriceValue] = useState('');

  const [searchProduct, setSearchProduct] = useState('');

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState('');

  const url = !categoryValue
    ? `https://fakestoreapi.com/products`
    : `https://fakestoreapi.com/products/category/${categoryValue}`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        const { status, data } = response;
        if (status === 200) {
          setLoading(false);
          dispatch(setProductsList(data));
        }
      })
      .catch((error) => {
        if (error.response) {
          setLoading(false);
          setError('No products found');
        } else if (error.request) {
          setLoading(false);
          setError('No response received');
        } else {
          setLoading(false);
          setError(error.message);
        }
      });
  }, [url, dispatch]);

  function sortPrice() {
    if (priceValue === 'ascending-price') {
      return (a, b) => (a.price > b.price ? 1 : -1);
    } else if (priceValue === 'descending-price') {
      return (a, b) => (a.price < b.price ? 1 : -1);
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
          <>
            <Box sx={{ my: 5 }}>
              <SearchBar setSearchProduct={setSearchProduct} />
            </Box>
            <Box
              justifyContent="center"
              sx={{
                display: { xs: 'block', md: 'flex' },
                gap: 3,
                mx: 6,
              }}
            >
              <Box
                sx={{
                  width: { xs: '75%', md: '25%' },
                  mx: { xs: 'auto' },
                  mb: { xs: 5 },
                }}
              >
                <Filter
                  setCategoryValue={setCategoryValue}
                  priceValue={priceValue}
                  setPriceValue={setPriceValue}
                />
              </Box>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(25%, 300px))',
                  justifyContent: 'center',
                  columnGap: { xs: 12, md: 8 },
                  rowGap: 5,
                  width: { xs: '100%', md: '75%' },
                  mb: 30,
                }}
              >
                {productsList
                  .filter((product) => {
                    if (
                      searchProduct === '' ||
                      product.title
                        .toLowerCase()
                        .includes(searchProduct.toLowerCase()) ||
                      product.category
                        .toLowerCase()
                        .includes(searchProduct.toLowerCase())
                    ) {
                      return product;
                    }
                    return false;
                  })
                  .sort(sortPrice())
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </Box>
            </Box>
          </>
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
