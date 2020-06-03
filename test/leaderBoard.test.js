import { postScore, getScores } from '../src/apiHandle/apiHandle';


test('should successfully create the player and score given name and score', async () => {
  const data = await postScore('steve-test', 100);
  expect(data.data.result).toBe('Leaderboard score created correctly.');
  expect(data.status).toBe(201);
  expect(data.statusText).toBe('Created');
}, 30000);

test('should successfully return all players and their scores', async () => {
  const result = await getScores();
  expect(typeof result).toBe('object');
}, 30000);