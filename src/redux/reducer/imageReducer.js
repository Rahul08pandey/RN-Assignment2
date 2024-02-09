// reducer.js

import { FETCH_IMAGE_REQUEST, FETCH_IMAGE_SUCCESS, FETCH_IMAGE_FAILURE } from './actions';

const initialState = {
  capturedImage: null,
  imageData: null,
  error: null,
};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CAPTURE_IMAGE':
      return {
        ...state,
        capturedImage: action.payload,
      };
    case FETCH_IMAGE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_IMAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        imageData: action.payload,
      };
    case FETCH_IMAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      case 'ADD_IMAGE':
      return {
        ...state,
        images:[...state.images,action.payload],
      };
    default:
      return state;
  }
};

export default imageReducer;
