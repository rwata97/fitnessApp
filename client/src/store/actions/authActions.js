export const authAction = {
  logIn: (state, { payload }) => {
    state.isLoggedIn = true;
    state.token = payload;
  },
  logout: (state) => {
    state.isLoggedIn = false;
    state.token = '';
  },
};
