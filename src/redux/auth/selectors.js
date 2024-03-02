export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

// export const selectUser = (state) => state.auth.user;

export const selectName = (state) => state.auth.user.name;

export const selectEmail = (state) => state.auth.user.email;

export const selectIsRefreshing = (state) => state.auth.isRefreshing;
//--------------------------------------------------------------------
export const selectIsLoading = (state) => state.auth.isLoading;

export const selectToken = (state) => state.auth.token;

export const selectAuthError = (state) => state.auth.error;
