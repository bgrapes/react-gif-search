import { OPEN_MODAL, CLOSE_MODAL } from '../actions';

// Create default state values when app first loads.
const initialState = {
  selectedGif: null,
  modalIsOpen: false
};

export default function modal(state = initialState, action) {
  switch(action.type) {
    case OPEN_MODAL:
      return {
        // Use object spread syntax to copy state and avoid mutating it directly.
        // Set the state of the new object.
        ...state,
        modalIsOpen: true,
        selectedGif: action.gif.selectedGif
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modalIsOpen: false,
        selectedGif: null
      };
    default:
      return state;
  }
}