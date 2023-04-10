/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import Team from '../app';

test('test addError', () => {
  const team = new Team();
  const person = {
    name: 'Лучник',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  team.add(person);
  expect(() => {
    team.add(person);
  }).toThrow('Такой персонаж уже существует');
});
