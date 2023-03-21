import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/Auth/AuthContext';
import { CartContext } from '../../Context/Cart/CartContext';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Navbar() {
  const { authToken, logout } = useContext(AuthContext);

  const { cart } = useContext(CartContext);

  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#802c6e' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link
              href="/"
              sx={{ color: 'white', textDecoration: 'none', cursor: 'pointer' }}
              onClick={() => {
                localStorage.removeItem('category');
              }}
            >
              Fake Store
            </Link>
          </Typography>
          {!authToken ? (
            <Button href="/login" color="inherit">
              Login
            </Button>
          ) : (
            <>
              <Button href="/products" color="inherit">
                Products
              </Button>
              <Button
                color="inherit"
                onClick={() => {
                  navigate('/cart');
                }}
              >
                <Badge badgeContent={cart.length} color="secondary">
                  <ShoppingCartIcon sx={{ color: 'white' }} />
                </Badge>
              </Button>
              <Button
                href="/"
                color="inherit"
                onClick={(e) => {
                  e.preventDefault();
                  logout();
                  navigate('/');
                }}
              >
                Logout
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
