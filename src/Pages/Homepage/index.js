import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/Auth/AuthContext';
import Navbar from '../../Components/Navbar';
import FakeStoreImage from '../../Images/fake-store.svg';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './Homepage.css';

export default function Homepage() {
  const { authToken } = useContext(AuthContext);

  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={FakeStoreImage} alt="homepage" className="homepage-image" />
        {authToken && (
          <Button
            sx={{
              width: '200px',
              height: '50px',
              backgroundColor: '#802c6e',
              color: 'white',
              '&:hover': {
                backgroundColor: '#983482',
                boxShadow: 'none',
              },
            }}
            onClick={() => {
              navigate('/products');
            }}
          >
            Shop now
          </Button>
        )}
      </Box>
    </>
  );
}
