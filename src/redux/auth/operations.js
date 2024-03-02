import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://goit-task-manager.herokuapp.com/';
// axios.defaults.baseURL = process.env.REACT_APP_LOCALHOST;
// const BASE_URL = process.env.REACT_APP_LOCALHOST;
export const BASE_URL = axios.create({
  baseURL: process.env.REACT_APP_LOCALHOST,
});

// const setAuthHeader = (token) => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// const cleanAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

const token = {
  set(token) {
    BASE_URL.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
  unset() {
    BASE_URL.defaults.headers.common['Authorization'] = '';
  },
};

// export const register = createAsyncThunk(
//   'auth/register',
//   async (credentials, thunkAPI) => {
//     try {
//       console.log('Sending request with credentials:', credentials);
//       const res = await axios.post(`${BASE_URL}/users/signup`, credentials);
//       console.log('Response from server:', res.data);
//       // After successful registration, add the token to the HTTP header
//       setAuthHeader(res.data.token);
//       return res.data;
//     } catch (error) {
//       console.error('Error during registration:', error);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
export const register = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      console.log('Sending request with credentials:', userData);
      const { data } = await BASE_URL.post('/users/signup', userData);
      console.log('Response from server:', data);
      token.set(data.token);
      return data;
    } catch (error) {
      if (error.response.status === 409) {
        console.log('User with such email already exists!');
        // toast.error('User with such email already exists!', toastStyled);
      } else {
        console.log('Validation error.');

        // toast.error('Validation error.', toastStyled);
      }

      return rejectWithValue(error.message);
    }
  }
);

// export const logIn = createAsyncThunk(
//   'auth/login',
//   async (credentials, thunkAPI) => {
//     try {
//       console.log('Sending request with credentials:', credentials);

//       const res = await axios.post(`${BASE_URL}/users/login`, credentials);
//       console.log('Response from server:', res.data);

//       // After successful login, add the token to the HTTP header
//       setAuthHeader(res.data.token);
//       return res.data;
//     } catch (error) {
//       console.error('Error during login:', error);

//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
export const logIn = createAsyncThunk(
  'auth/login',
  async (userData, { rejectWithValue }) => {
    try {
      console.log('Sending request with credentials:', userData);
      const { data } = await BASE_URL.post('/users/login', userData);
      console.log('Response from server:', data);
      token.set(data.token);
      return data;
    } catch (error) {
      if (error.response.status === 404) {
        console.error('Error during login: with status 404', error);
        // toast.error('User with such email not found!', toastStyled);
      } else if (error.response.status === 403) {
        console.error('Error during login: with status 403', error);
        // toast.error('Provided password is incorrect!', toastStyled);
      } else {
        // toast.error('Validation error.', toastStyled);
      }

      return rejectWithValue(error.message);
    }
  }
);

// export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
//   try {
//     await axios.post(`${BASE_URL}/users/logout`);
//     // After a successful logout, remove the token from the HTTP header
//     cleanAuthHeader();
//   } catch (error) {
//     console.error('Error during logout:', error);
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });
export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await BASE_URL.delete('/users/logout');
      token.unset();
    } catch (error) {
      console.error('Error during logout:', error);
      return rejectWithValue(error.message);
    }
  }
);

// export const refreshUser = createAsyncThunk(
//   'auth/refresh',
//   async (_, thunkAPI) => {
//     // Reading the token from the state via getState()
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;
//     if (persistedToken === null) {
//       // If there is no token, exit without performing any request
//       return thunkAPI.rejectWithValue('Unable to fetch user');
//     }
//     try {
//       // If there is a token, add it to the HTTP header and perform the request
//       setAuthHeader(persistedToken);
//       const res = await axios.get(`${BASE_URL}/users/current`);
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    const tokenCurrent = getState().auth.token;
    if (!tokenCurrent) {
      return rejectWithValue();
    }
    token.set(tokenCurrent);
    try {
      const { data } = await BASE_URL.get('/users/current');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
