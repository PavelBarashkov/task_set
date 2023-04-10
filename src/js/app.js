/* eslint-disable linebreak-style */
export default class Team {
  constructor() {
    this.membres = new Set();
  }

  // Метод add должен добавлять выбранного персонажа в команду
  add(Character) {
    if (this.membres.has(Character)) {
      throw new Error('Такой персонаж уже существует');
    } else {
      this.membres.add(Character);
    }
  }

  // Метод addAll добавляет произвольное количество персонажей в команду
  addAll(...Character) {
    Character.forEach((item) => this.membres.add(item));
  }

  // Метод toArray должен производить конвертацию Set в массив.
  toArray() {
    return Array.from(this.membres);
  }
}
