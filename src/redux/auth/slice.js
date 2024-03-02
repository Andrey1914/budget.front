import { createSlice } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  // user: { name: null, email: null },
  user: { name: '', email: '', id: '' },
  token: null,
  isLoading: false,
  isRefreshing: false,
  isLoggedIn: false,
  error: null,
};

const authPersistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

// const initialState = {
//   data: {
//     data: {
//       name: '',
//       email: '',
//       token: null,
//       isLoading: false,
//       isRefreshing: false,
//       isLoggedIn: false,
//     },
//   },
// };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // [register.fulfilled](state, action) {
    //   state.data = action.payload;
    //   state.user = action.payload.user;
    //   state.token = action.payload.token;
    //   state.isLoading = true;
    //   state.isLoggedIn = true;
    // },
    [register.pending]: handlePending,
    [logIn.pending]: handlePending,
    [logOut.pending]: handlePending,

    [register.rejected]: handleRejected,
    [logIn.rejected]: handleRejected,
    [logOut.rejected]: handleRejected,

    [register.fulfilled]: (state, { payload: { user, token } }) => {
      state.token = token;
      state.user = user;
      state.isLoggedIn = true;
      state.isLoading = false;
    },

    // [logIn.fulfilled](state, action) {
    //   state.user = action.payload.user;
    //   state.token = action.payload.token;
    //   state.isLoading = true;
    //   state.isLoggedIn = true;
    // },

    [logIn.fulfilled]: (state, { payload: { user, token } }) => {
      state.token = token;
      state.user = user;
      state.isLoggedIn = true;
      state.isLoading = false;
    },

    // [logOut.fulfilled]: () => {
    //   return initialState;
    // },

    [logOut.fulfilled]: (state) => {
      state.token = null;
      state.user = { name: '', email: '' };
      state.isLoggedIn = false;
      state.isLoading = false;
    },

    // [refreshUser.pending]: (state) => {
    //   state.isRefreshing = true;
    // },
    // [refreshUser.fulfilled](state, action) {
    //   state.user = action.payload;
    //   state.isLoggedIn = true;
    //   state.isRefreshing = false;
    // },
    // [refreshUser.rejected]: (state) => {
    //   state.isRefreshing = false;
    // },

    [refreshUser.pending]: (state) => {
      state.isLoading = true;
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.isRefreshing = false;
    },
    [refreshUser.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
      state.isRefreshing = false;
    },
  },
});

// export const authReducer = authSlice.reducer;
export const authReducer = persistReducer(authPersistConfig, authSlice.reducer);
