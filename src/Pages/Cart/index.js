import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/Auth/AuthContext';
import { CartContext } from '../../Context/Cart/CartContext';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import AccessForbidden from '../../Components/AccessForbidden';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import './Cart.css';

export default function Cart() {
  const { authToken } = useContext(AuthContext);

  const { cart, setCart } = useContext(CartContext);

  const itemCount = {};

  cart.forEach((product) => {
    itemCount[product.id] = (itemCount[product.id] || 0) + 1;
  });

  const uniqueProducts = [...new Map(cart.map((p) => [p.id, p])).values()];

  function getTotalPrice(uniqueProducts) {
    return uniqueProducts
      .map((product) => product.price)
      .reduce((acc, value) => acc + value, 0);
  }

  const totalPrice = getTotalPrice(cart);

  function getTotalItems() {
    return cart.length;
  }

  const [items, setItems] = useState(itemCount);

  function handleDecrement(e) {
    const itemId = Number(e.target.getAttribute('productid'));

    setItems({ ...items, [itemId]: items[itemId] - 1 });

    const removedItemIndex = cart.findIndex((element) => element.id === itemId);

    cart.splice(removedItemIndex, 1);

    setCart([...cart]);
  }

  function handleIncrement(e) {
    const itemId = Number(e.target.getAttribute('productid'));
    const itemTitle = e.target.getAttribute('producttitle');
    const itemCategory = e.target.getAttribute('productcategory');
    const itemDescription = e.target.getAttribute('productdescription');
    const itemImage = e.target.getAttribute('productimage');
    const itemPrice = Number(e.target.getAttribute('productprice'));
    const itemRatingRate = Number(e.target.getAttribute('productratingrate'));
    const itemRatingCount = Number(e.target.getAttribute('productratingcount'));

    setItems({ ...items, [itemId]: items[itemId] + 1 });

    setCart([
      ...cart,
      {
        id: itemId,
        title: itemTitle,
        category: itemCategory,
        description: itemDescription,
        image: itemImage,
        price: itemPrice,
        rating: { rate: itemRatingRate, count: itemRatingCount },
      },
    ]);
  }

  function handleDelete(e) {
    const itemId = Number(e.target.getAttribute('productid'));
    const filteredCart = cart.filter((product) => product.id !== itemId);
    setCart(filteredCart);
  }

  function handleDeleteAll() {
    setCart([]);
  }

  const navigate = useNavigate();

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh' }}>
      <Box sx={{ pb: 5 }}>
        <Navbar />
        {authToken && (
          <Box
            sx={{
              mt: 5,
              pb: 5,
            }}
          >
            {uniqueProducts.map((product, index) => (
              <Paper
                elevation={3}
                key={index}
                sx={{
                  mx: 'auto',
                  my: 2,
                  p: 2,
                  width: '60%',
                  minHeight: '60px',
                  display: { md: 'block', lg: 'flex' },
                  justifyContent: 'space-between',
                  ':hover': {
                    boxShadow: 5,
                  },
                }}
              >
                <Box
                  sx={{
                    py: { xs: 1.5, lg: 1 },
                    display: { xs: 'block', lg: 'flex' },
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  <Link
                    href={`/products/${product.id}`}
                    sx={{
                      textDecoration: 'none',
                    }}
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="product-cart-image"
                    />
                  </Link>
                  <Link
                    href={`/products/${product.id}`}
                    sx={{
                      textDecoration: 'none',
                      color: 'black',
                    }}
                  >
                    <Typography sx={{ py: { xs: 1.5, lg: 1 } }}>
                      {product.title?.substring(0, 50)}...
                    </Typography>
                  </Link>
                </Box>
                <Box
                  sx={{
                    py: { xs: 1.5, lg: 1 },
                    display: { md: 'block', lg: 'flex' },
                    alignItems: 'center',
                    gap: '10px',
                    textAlign: 'center',
                  }}
                >
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
                    productid={product.id}
                    onClick={handleDecrement}
                  >
                    -
                  </Button>
                  <Typography
                    sx={{
                      px: { xs: 1 },
                      textAlign: 'center',
                      display: { xs: 'inline-block' },
                    }}
                  >
                    Items: {items[product.id]}
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
                    productid={product.id}
                    producttitle={product.title}
                    productcategory={product.category}
                    productdescription={product.description}
                    productimage={product.image}
                    productprice={product.price}
                    productratingrate={product.rating?.rate}
                    productratingcount={product.rating?.count}
                    onClick={handleIncrement}
                  >
                    +
                  </Button>
                  <Typography
                    sx={{
                      py: { xs: 1.5, lg: 1 },
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}
                  >
                    {' '}
                    Price: &euro;
                    {product.price?.toFixed(2) * items[product.id]}
                  </Typography>
                  <Button
                    sx={{
                      backgroundColor: '#b30000',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: '#e60000',
                        boxShadow: 'none',
                      },
                    }}
                    productid={product.id}
                    onClick={handleDelete}
                  >
                    Delete
                  </Button>
                </Box>
              </Paper>
            ))}
            {totalPrice === 0 ? (
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <Typography variant="h5" sx={{ mb: 5, textAlign: 'center' }}>
                  Your cart is empty
                </Typography>
                <Box>
                  <Button
                    sx={{
                      width: '300px',
                      backgroundColor: '#0052cc',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: '#0066ff',
                        boxShadow: 'none',
                      },
                    }}
                    onClick={() => navigate('/products')}
                  >
                    Continue shopping
                  </Button>
                </Box>
              </Box>
            ) : (
              <>
                <Typography variant="h5" sx={{ my: 5, textAlign: 'center' }}>
                  Total price: &euro;
                  {totalPrice.toFixed(2)}
                </Typography>
                <Typography variant="h5" sx={{ my: 5, textAlign: 'center' }}>
                  Total items: {getTotalItems()}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '25px',
                  }}
                >
                  <Box>
                    <Button
                      sx={{
                        width: '300px',
                        backgroundColor: '#b30000',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: '#e60000',
                          boxShadow: 'none',
                        },
                      }}
                      onClick={handleDeleteAll}
                    >
                      Delete all
                    </Button>
                  </Box>
                  <Box>
                    <Button
                      sx={{
                        width: '300px',
                        backgroundColor: '#0052cc',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: '#0066ff',
                          boxShadow: 'none',
                        },
                      }}
                      onClick={() => navigate('/products')}
                    >
                      Continue shopping
                    </Button>
                  </Box>
                </Box>
              </>
            )}
          </Box>
        )}
        {!authToken && <AccessForbidden />}
        <Footer />
      </Box>
    </Box>
  );
}
