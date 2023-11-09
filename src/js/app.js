export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(data) {
    if (this.members.has(data)) {
      throw new Error("Герой уже в команде");
    } else {
      this.members.add(data);
    }
  }

  addAll(...characters) {
    for (const character of characters) {
      this.members.add(character);
    }
  }

  toArray() {
    return [...this.members];
  }
}
