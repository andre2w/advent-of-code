import test from "ava";
import { calculateAimedPosition, calculatePosition, Command, CommandType } from "./dive";

const forward = (value: number) => (<Command>{ type: "forward", value });
const down = (value: number) => (<Command>{ type: "down", value });
const up = (value: number) => (<Command>{ type: "up", value });

/**
 * Dive 1
 */
test("Initial Position is 0,0", expect => {
  expect.deepEqual(calculatePosition([]), { distance: 0, depth: 0 });
});

test("forward increases the distance", expect => {
    expect.deepEqual(calculatePosition([forward(1)]), { distance: 1, depth: 0});
  expect.deepEqual(calculatePosition([forward(1), forward(13)]), { distance: 14, depth: 0});
});

test("down increases depth", expect => {
  const down = (value: number) => (<Command>{ type: "down", value });
  expect.deepEqual(calculatePosition([down(1)]), { distance: 0, depth: 1});
  expect.deepEqual(calculatePosition([down(1), down(13)]), { distance: 0, depth: 14});
});


test("up decreases depth", expect => {
  expect.deepEqual(calculatePosition([down(1), up(1)]), { distance: 0, depth: 0});
  expect.deepEqual(calculatePosition([down(1), down(13), up(1), up(3)]), { distance: 0, depth: 10});
});

/**
 * Dive 2
 */
test("forward does not change depth when aim is 0", expect => {
  expect.deepEqual(calculateAimedPosition([forward(5)]), { distance: 5, depth: 0, aim: 0});
  expect.deepEqual(calculateAimedPosition([forward(5), forward(4)]), { distance: 9, depth: 0, aim: 0});
});

test("down increases the aim", expect => {
  expect.deepEqual(calculateAimedPosition([down(5)]), { distance: 0, depth: 0, aim: 5 });
});

test("move forward aimed down increases depth", expect => {
  expect.deepEqual(calculateAimedPosition([forward(5), down(5), forward(8)]), { distance: 13, depth: 40, aim: 5 });
});

test("moving up decreases depth", expect => {
  expect.deepEqual(calculateAimedPosition([down(10), up(8)]), { distance: 0, depth: 0, aim: 2 });
});

test("Submarine navigating through all directions", expect => {
  expect.deepEqual(calculateAimedPosition([
    forward(5),
    down(5),
    forward(8),
    up(3),
    down(8),
    forward(2)
  ]), { distance: 15, depth: 60, aim: 10 });
});
