export const getUsers = (state) => {
  return state.user.response;
};

export const getError = (state) => {
  return state.user.error;
};

export const getLoading = (state) => {
  return state.user.loading;
};
