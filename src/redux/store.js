import { configureStore } from '@reduxjs/toolkit';

// import { getDefaultMiddleware } from '@reduxjs/toolkit';
// import { GetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';

import {
  persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// import storage from 'redux-persist/lib/storage';

// import { tasksReducer } from './tasks/slice';

import { authReducer } from './auth/slice';

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // auth: persistReducer(authPersistConfig, authReducer),
    // tasks: tasksReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
  // middleware,
  // devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
