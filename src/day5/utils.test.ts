import test from "ava";
import { Position, Line, parseInput, expandLine } from "./utils";

const toLine: (x1: number, y1: number, x2: number, y2: number) => Line = 
  (x1, y1, x2, y2) => ({ start: { x: x1, y: y1 }, end: { x: x2, y: y2 } });

const input = `0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2
`;

test("Parse input into Lines", expect => {
  const lines = [
    toLine(0,9,5,9),
    toLine(8,0,0,8),
    toLine(9,4,3,4),
    toLine(2,2,2,1),
    toLine(7,0,7,4),
    toLine(6,4,2,0),
    toLine(0,9,2,9),
    toLine(3,4,1,4),
    toLine(0,0,8,8),
    toLine(5,5,8,2)
  ];

  expect.deepEqual(parseInput(input), lines);
});

test("Expand diagonal line: Left To Right, Top to Bottom - 1", expect => {
  const line: Line = {
    start: { x: 1, y: 1 },
    end: { x: 3, y: 3 }
  };

  const positions: Position[] = [
    { x: 1, y: 1},
    { x: 2, y: 2},
    { x: 3, y: 3},
  ];

  expect.deepEqual(expandLine(line), positions);
});

test("Expand diagonal line: Left To Right, Top to Bottom - 2", expect => {
  const line: Line = {
    start: { x: 1, y: 2 },
    end: { x: 3, y: 4 }
  };

  const positions: Position[] = [
    { x: 1, y: 2},
    { x: 2, y: 3},
    { x: 3, y: 4},
  ]
  expect.deepEqual(expandLine(line), positions);
});

test("Expand diagonal line: Left To Right, Top to Bottom - 3", expect => {
  const line: Line = {
    start: { x: 2, y: 2 },
    end: { x: 4, y: 4 }
  };

  const positions: Position[] = [
    { x: 2, y: 2},
    { x: 3, y: 3},
    { x: 4, y: 4},
  ]
  expect.deepEqual(expandLine(line), positions);
});

test("Expand diagonal line: Left to Right, Bottom to Top - 1", expect => {
   const line: Line = {
    start: { x: 1, y: 3 },
    end: { x: 3, y: 1 }
  };

  const positions: Position[] = [
    { x: 1, y: 3 },
    { x: 2, y: 2 },
    { x: 3, y: 1 },
  ];

  expect.deepEqual(expandLine(line), positions);

});

test("Expand diagonal line: Left to Right, Bottom to Top - 2", expect => {
  const line: Line = {
    start: { x: 1, y: 4 },
    end:   { x: 3, y: 2 }
  };

  const positions: Position[] = [
    { x: 1, y: 4 },
    { x: 2, y: 3 },
    { x: 3, y: 2 },
  ]
  expect.deepEqual(expandLine(line), positions);
});

test("Expand diagonal line: Right to Left, Top to Bottom - 1", expect => {
  const line: Line = {
    start: { x: 3, y: 1 },
    end:   { x: 1, y: 3 },
  };

  const positions: Position[] = [
    { x: 3, y: 1 },
    { x: 2, y: 2 },
    { x: 1, y: 3 },
  ];

  expect.deepEqual(expandLine(line), positions);
});

test("Expand diagonal line: Right to Left, Top to Bottom - 2", expect => {
  const line: Line = {
    start: { x: 4, y: 1 },
    end:   { x: 2, y: 3 },
  };

  const positions: Position[] = [
    { x: 4, y: 1 },
    { x: 3, y: 2 },
    { x: 2, y: 3 },
  ];

  expect.deepEqual(expandLine(line), positions);
});

test("Expand diagonal line: Right To Left, Bottom to Top - 1", expect => {
  const line: Line = {
    start: { x: 4, y: 3 },
    end:   { x: 2, y: 1 },
  };

  const positions: Position[] = [
    { x: 4, y: 3 },
    { x: 3, y: 2 },
    { x: 2, y: 1 },
  ];

  expect.deepEqual(expandLine(line), positions);
});


test("Expand diagonal line: 1,1 -> 3,3", expect => {
  const line: Line = {
    start: { x: 1, y: 1 },
    end:   { x: 3, y: 3 },
  };

  const positions: Position[] = [
    { x: 1, y: 1 },
    { x: 2, y: 2 },
    { x: 3, y: 3 },
  ];

  expect.deepEqual(expandLine(line), positions);
});

test("Expand diagonal line: 9,7 -> 7,9", expect => {
  const line: Line = {
    start: { x: 9, y: 7 },
    end:   { x: 7, y: 9 },
  };

  const positions: Position[] = [
    { x: 9, y: 7 },
    { x: 8, y: 8 },
    { x: 7, y: 9 },
  ];

  expect.deepEqual(expandLine(line), positions);
});

test("Expand Line in the horizontal to show all the positions", expect => {
  expect.deepEqual(expandLine(toLine(0,9,5,9)), [
    { x: 0, y: 9 },
    { x: 1, y: 9 },
    { x: 2, y: 9 },
    { x: 3, y: 9 },
    { x: 4, y: 9 },
    { x: 5, y: 9 },
  ]);
});
test("Expand Line in the horizontal to show all the positions 2", expect => {
  expect.deepEqual(expandLine(toLine(9,4,3,4)), [
    { x: 3, y: 4 },
    { x: 4, y: 4 },
    { x: 5, y: 4 },
    { x: 6, y: 4 },
    { x: 7, y: 4 },
    { x: 8, y: 4 },
    { x: 9, y: 4 }
  ]);
});

test("Expand Line in the vertical to show all the positions", expect => {
  expect.deepEqual(expandLine(toLine(7,0,7,4)), [
    { x: 7, y: 0 },
    { x: 7, y: 1 },
    { x: 7, y: 2 },
    { x: 7, y: 3 },
    { x: 7, y: 4 },
  ]);
});
