/* eslint-disable no-alert */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { elements } from '../scenes/domElements';

export const postScore = async (user, score) => {
  try {
    const result = await axios.post('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/GlD30F7kYzhLbHmTWHuN/scores/', {
      user,
      score,
    });
    return result;
  } catch (error) {
    elements.error.textContent = error;
  }
};

export const getScores = async () => {
  try {
    const result = await axios.get('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/GlD30F7kYzhLbHmTWHuN/scores/');
    return result.data.result;
  } catch (error) {
    elements.error.textContent = error;
    return error;
  }
};