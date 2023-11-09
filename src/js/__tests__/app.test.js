import Team from "../app.js";

const team = new Team();
const bowman = {
  name: "Bowman",
  lavel: 1,
};

const daemon = {
  name: "Daemon",
  lavel: 1,
};
const undead = {
  name: "Undead",
  lavel: 1,
};

test("Testing the add method", () => {
  team.add(bowman);
  expect(team.members.size).toBe(1);
});

test("Testing the err if character already exist", () => {
  expect(() => team.add(bowman)).toThrow("Герой уже в команде");
});

test("Testing the addAll method", () => {
  const characters = [bowman, daemon, undead];
  team.addAll(...characters);
  expect(team.members.size).toBe(characters.length);
});

test("Testing the team.members turns into array", () => {
  expect(Array.isArray(team.toArray())).toBeTruthy();
});
