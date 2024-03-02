import * as React from 'react';

import { useDispatch } from 'react-redux';

import { logIn } from '../../redux/auth/operations';

// import Button from 'components/Button/Button';

import {
  Container,
  Box,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  OutlinedInput,
} from '@mui/material';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import useFormFields from 'hooks/useFormField';

export default function LoginForm() {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const {
    state: email,
    setState: setEmail,
    handleChange: handleEmailChange,
  } = useFormFields('');

  const {
    state: password,
    setState: setPassword,
    handleChange: handlePasswordChange,
  } = useFormFields('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn({ email: email, password: password }));
    formReset();
  };

  const formReset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          // marginTop: 6,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          autoComplete="off"
          noValidate
          sx={{ padding: '1rem' }}
        >
          <TextField
            type="email"
            // name="email"
            value={email}
            label="Email"
            margin="normal"
            fullWidth
            onChange={handleEmailChange}
          />

          <FormControl
            sx={{ marginTop: '16px', marginBottom: '16px', width: '100%' }}
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              value={password}
              onChange={handlePasswordChange}
              fullWidth
            />
          </FormControl>
          {/* <label>
            <TextField
              type="password"
              // name="password"
              value={password}
              label="Password"
              margin="normal"
              fullWidth
              onChange={handlePasswordChange}
            />
          </label> */}
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            onClick={handleSubmit}
            sx={{ padding: '10px' }}
          >
            Log in
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
