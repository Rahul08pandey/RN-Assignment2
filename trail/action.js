// actions.js
import axios from 'axios';

export const registerRequest = () => ({type: 'REGISTER_REQUEST'});
export const registerSuccess = user => ({
  type: 'REGISTER_SUCCESS',
  payload: user,
});
export const registerFailure = error => ({
  type: 'REGISTER_FAILURE',
  payload: error,
});

export const registerUser = userData => {
  return async dispatch => {
    dispatch(registerRequest());
    try {
      const response = await axios.post(
        'https://dummyapi.io/data/v1/user',
        userData,
      );
      const user = response.data; // Assuming your API returns user data upon successful registration
      dispatch(registerSuccess(user));
    } catch (error) {
      dispatch(registerFailure(error.message));
    }
  };
};
