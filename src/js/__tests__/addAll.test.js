/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import Team from '../app';

test('test addAll', () => {
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
  const result = new Set([
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
  ]);
  team.addAll(bowman, swordman, magician);
  expect(team.membres).toEqual(result);
});
