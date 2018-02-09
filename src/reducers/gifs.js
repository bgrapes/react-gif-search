import { REQUEST_GIFS } from '../actions';

const initialState = {
  data: []
};

export default function gifs(state = initialState, action) {
  switch (action.type) {
    case REQUEST_GIFS:
      return {
        // Object spread syntax - requires Babel to transpile code down to ES5.
        // Creates new version of the store, updating the value of the data key on the new object.
        // This is like a Save As - we never want to mutate the state directly.
        ...state, data: action.payload.body.data
      };
    default:
      return state;
  }
}