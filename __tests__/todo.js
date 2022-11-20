// __tests__/todo.js
let todoList = require("../todo");

const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();
/* eslint-disable no-undef */
describe("Todo List Test Suite", () => {
  beforeAll(() => {
    // Seed the test data
    const todays = new Date();
    const one_Day = 60 * 60 * 24 * 1000;
    [
      {
        title: "Buy milk",
        completed: false,
        dueDate: new Date(todays.getTime() - 2 * one_Day).toLocaleDateString(
          "en-CA"
        ),
      },
      {
        title: "Pay rent",
        completed: false,
        dueDate: new Date().toLocaleDateString("en-CA"),
      },
      {
        title: "Submit assignment",
        completed: false,
        dueDate: new Date(todays.getTime() + 2 * one_Day).toLocaleDateString(
          "en-CA"
        ),
      },
    ].forEach(add);
  });
  test("Should add a new todo", () => {
    expect(all.length).toEqual(3);

    add({
      title: "The test item",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toEqual(4);
  });

  test("we Should mark a todo as complete", () => {
    expect(all[0].completed).toEqual(false);
    markAsComplete(0);
    expect(all[0].completed).toEqual(true);
  });

  test("we Should retrieve overdue items", () => {
    expect(overdue().length).toEqual(1);
  });

  test("we Should retrieve due today items", () => {
    expect(dueToday().length).toEqual(2);
  });

  test(" we Should retrieve due later items", () => {
    expect(dueLater().length).toEqual(1);
  });
});
