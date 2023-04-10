/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable no-trailing-spaces */
import Team from '../app';

test('return arr', () => {
  const team = new Team();
  const bowman = {
    name: 'Лучник',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const swordman = {
    name: 'Мечник',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const magician = {
    name: 'Маг',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  team.addAll(bowman, swordman, magician);
  const result = [
    {
      name: 'Лучник',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    },
    {
      name: 'Мечник',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    },
    {
      name: 'Маг',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    },
  ];
  expect(team.toArray()).toEqual(result);
});
