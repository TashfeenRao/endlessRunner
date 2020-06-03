import gameOptions from '../src/constants/constants';

test('it should give Player Gravity', () => {
  const gravity = gameOptions.playerGravity;
  expect(gravity).toBe(900);
});

test('it should give jumpForce', () => {
  const { jumpForce } = gameOptions;
  expect(jumpForce).toBe(400);
});

test('it should give updated score text', () => {
  gameOptions.scoreText = '230';
  expect(gameOptions.scoreText).toBe('230');
});

test('it should give updated score', () => {
  gameOptions.score = 100;
  expect(gameOptions.score).toBe(100);
});

test('it should give updated name', () => {
  gameOptions.name = 'Tashfeen';
  expect(gameOptions.name).toBe('Tashfeen');
});