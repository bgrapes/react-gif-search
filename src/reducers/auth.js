import { SIGN_IN_USER, SIGN_OUT_USER } from '../actions';

// Set initial state for user to be signed out
const initialState = {
  authenticated: false
};

export default function gifs(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN_USER:
      return {
        // Create a new copy of state with authentication set to true
        ...state, authenticated: true
      };
    case SIGN_OUT_USER:
      return {
        ...state, authenticated: false
      };
    default:
      return state;
  }
}