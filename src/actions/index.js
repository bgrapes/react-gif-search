import request from 'superagent';

export const OPEN_MODAL = 'OPEN_MODAL'; // Add action types as constants.
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const REQUEST_GIFS = 'REQUEST_GIFS';
export const SIGN_IN_USER = 'SIGN_IN_USER';
export const SIGN_OUT_USER = 'SIGN_OUT_USER';

const API_URL = 'http://api.giphy.com/v1/gifs/search?q=';
const API_KEY = '&api_key=PAj6Ma5qZZWHqhIQTTQ6hZaZiqPuFi4O';

export function requestGifs(term = null) {
  const data = request.get(`${API_URL}${term.replace(/\s/g, '+')}${API_KEY}`);

  return {
    type: REQUEST_GIFS,
    payload: data
  }
}

// Define action creator for new action type.
// Takes gif as an argument - the gif the modal will render.
export function openModal(gif) {
  return {
    type: OPEN_MODAL,
    gif
  }
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  }
}

export function signInUser() {
  return {
    type: SIGN_IN_USER
  }
}

export function signOutUser() {
  return {
    type: SIGN_OUT_USER
  }
}