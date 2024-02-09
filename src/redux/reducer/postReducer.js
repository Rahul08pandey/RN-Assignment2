const initialState = {
  loading: false,
  error: null,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'POST_REQUEST':
      return { ...state, loading: true, error: null };
    case 'POST_SUCCESS':
      return { ...state, loading: false, error: null };
    case 'POST_FAILURE':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default postReducer;
