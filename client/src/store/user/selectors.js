const getData = () => (state) => state.user.data;
const getError = () => (state) => state.user.error;
const getIsLoading = () => (state) => state.user.isLoading;
const getToken = () => (state) => state.user.token;

export default { getData, getIsLoading, getError, getToken };
