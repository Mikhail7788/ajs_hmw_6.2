import Character from '../app';

test('take damage', () => {
  const hedgehog = new Character('Ёж77', 'barbed');

  const response = hedgehog.damage(100);
  expect(hedgehog).toEqual({
    name: 'Ёж77', type: 'barbed', health: 40, attack: 10, defence: 40,
  });
});

test('health = 0', () => {
  const hedgehog = new Character('Ёж77', 'barbed');

  const response = hedgehog.damage(500);
  expect(hedgehog).toEqual({
    name: 'Ёж77', type: 'barbed', health: 0, attack: 10, defence: 40,
  });
});