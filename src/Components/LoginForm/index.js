import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../Context/Auth/AuthContext';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PersonIcon from '@mui/icons-material/Person';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import ErrorIcon from '@mui/icons-material/Error';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';

export default function Login() {
  const usernameRef = useRef();

  useEffect(() => {
    if (!localStorage.getItem('rememberMe')) {
      usernameRef.current?.focus();
    }
  }, [usernameRef]);

  const setUsernameRef = (element) => {
    usernameRef.current = element;
  };

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const [userData, setUserData] = useState({ username: '', password: '' });

  const [userDataError, setUserDataError] = useState({
    usernameError: false,
    passwordError: false,
  });

  const [formError, setFormError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('https://fakestoreapi.com/auth/login', {
        username: userData.username,
        password: userData.password,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .then((response) => {
        login(response.data.token);
        if (checked) {
          localStorage.setItem('rememberMe', true);
        } else {
          localStorage.removeItem('rememberMe');
        }
        navigate('/products');
      })
      .catch((error) => {
        setFormError(error.message);
      });
  };

  const handleChangeUsername = (e) => {
    setUserData({ ...userData, username: e.target.value });
    setFormError('');

    setUserDataError({
      ...userDataError,
      usernameError: false,
      passwordError: false,
    });
  };

  const handleChangePassword = (e) => {
    setUserData({ ...userData, password: e.target.value });
    setFormError('');

    setUserDataError({
      ...userDataError,
      usernameError: false,
      passwordError: false,
    });
  };

  const handleUsernameBlur = (e) => {
    if (!e.target.value) {
      setUserDataError({ ...userDataError, usernameError: true });
    } else {
      setUserDataError({ ...userDataError, usernameError: false });
      setUsernameIconColor('gray');
    }
  };

  const handlePasswordBlur = (e) => {
    if (!e.target.value) {
      setUserDataError({ ...userDataError, passwordError: true });
    } else {
      setUserDataError({ ...userDataError, passwordError: false });
      setPasswordIconColor('gray');
    }
  };

  const [usernameIconColor, setUsernameIconColor] = useState('gray');

  const handleUsernameFocus = () => {
    setUsernameIconColor('#802c6e');
  };

  const [passwordIconColor, setPasswordIconColor] = useState('gray');

  const handlePasswordFocus = () => {
    setPasswordIconColor('#802c6e');
  };

  const [checked, setChecked] = useState(
    localStorage.getItem('rememberMe') ? true : false
  );

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    if (localStorage.getItem('rememberMe')) {
      setUserData({
        username: 'mor_2314',
        password: '83r5^_',
      });
    }
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      style={{ marginTop: '75px', textAlign: 'center' }}
    >
      <FormControl>
        <Typography
          sx={{
            mt: 10,
            fontSize: {
              xs: '17px',
              sm: '17px',
              md: '20px',
              lg: '23px',
              xl: '23px',
            },
            fontWeight: 'bold',
            textAlign: 'center',
            textTransform: 'uppercase',
            color: '#802c6e',
          }}
        >
          Login to your account
        </Typography>
        <TextField
          required
          error={userDataError.usernameError}
          name="username"
          onChange={handleChangeUsername}
          onBlur={handleUsernameBlur}
          onFocus={handleUsernameFocus}
          value={userData.username}
          inputRef={setUsernameRef}
          type="text"
          label="Username"
          variant="outlined"
          size="small"
          id="outlined-basic-username-address"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon
                  sx={{
                    color: userDataError.usernameError
                      ? '#d32f2f'
                      : usernameIconColor,
                  }}
                />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                {userDataError.usernameError ? (
                  <ErrorIcon sx={{ color: '#d32f2f' }} />
                ) : (
                  ''
                )}
              </InputAdornment>
            ),
          }}
          sx={{
            width: '100%',
            mt: 2.5,
            '& label.Mui-focused': {
              color: userDataError.usernameError ? '#d32f2f' : '#802c6e',
            },
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: userDataError.usernameError
                  ? '#d32f2f'
                  : '#802c6e',
              },
            },
          }}
        />
        <TextField
          required
          error={userDataError.passwordError}
          name="password"
          onChange={handleChangePassword}
          onBlur={handlePasswordBlur}
          onFocus={handlePasswordFocus}
          value={userData.password}
          type="password"
          label="Password"
          variant="outlined"
          size="small"
          id="outlined-basic-password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <VpnKeyIcon
                  sx={{
                    color: userDataError.passwordError
                      ? '#d32f2f'
                      : passwordIconColor,
                  }}
                />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                {userDataError.passwordError ? (
                  <ErrorIcon sx={{ color: '#d32f2f' }} />
                ) : (
                  ''
                )}
              </InputAdornment>
            ),
          }}
          sx={{
            width: '100%',
            mt: 2.5,
            '& label.Mui-focused': {
              color: userDataError.passwordError ? '#d32f2f' : '#802c6e',
            },
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: userDataError.passwordError
                  ? '#d32f2f'
                  : '#802c6e',
              },
            },
          }}
        />
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={handleCheckboxChange}
                sx={{
                  '&.Mui-checked': {
                    color: '#802c6e',
                  },
                }}
              />
            }
            label="Remember me"
          />
        </FormGroup>
        {formError && (
          <Alert
            variant="filled"
            severity="error"
            sx={{ display: 'flex', justifyContent: 'center', mt: 1.5 }}
          >
            {formError}
          </Alert>
        )}
        <Button
          type="submit"
          variant="contained"
          sx={{
            mt: 1.5,
            px: 3,
            py: 1.5,
            fontWeight: 'bold',
            textTransform: 'uppercase',
            borderRadius: 1,
            backgroundColor: '#802c6e',
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: '#983482',
            },
          }}
        >
          Login
        </Button>
      </FormControl>
    </form>
  );
}
