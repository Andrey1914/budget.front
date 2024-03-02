import { useSelector } from 'react-redux';

import {
  // selectUser,
  selectName,
  selectEmail,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectIsLoading,
  selectToken,
  selectAuthError,
} from '../redux/auth/selectors';

export const useAuth = () => {
  return {
    user: {
      name: useSelector(selectName),
      email: useSelector(selectEmail),
    },
    // user: useSelector(selectUser),
    // name: useSelector(selectName),
    // email: useSelector(selectEmail),
    error: useSelector(selectAuthError),
    token: useSelector(selectToken),
    isLoading: useSelector(selectIsLoading),
    isLoggedIn: useSelector(selectIsLoggedIn),
    isRefreshing: useSelector(selectIsRefreshing),
  };
};
