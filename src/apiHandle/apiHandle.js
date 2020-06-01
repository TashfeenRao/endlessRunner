/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const postScore = async (name,score) => {
  try {
    const result = //await axios.get('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/GlD30F7kYzhLbHmTWHuN/scores/');
    console.log(name);
    console.log(score);
  } catch (error) {
    alert(error);
  }
};