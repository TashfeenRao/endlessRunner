/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const postScore = async (user, score) => {
  try {
    const result = await axios.post('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/GlD30F7kYzhLbHmTWHuN/scores/', {
      user,
      score,
    });
  } catch (error) {
    alert(error);
  }
};

export const getScores = async () => {
  try {
    const result = await axios.get('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/GlD30F7kYzhLbHmTWHuN/scores/');
    return result.data.result;
  } catch (error) {
    alert(error);
    return error;
  }
};