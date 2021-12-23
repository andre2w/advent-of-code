import test from "ava";
import { countOverlap } from "./part2";

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
  expect.deepEqual(countOverlap(input), 12);
});
