import test from "ava";
import { binaryDiagnostic } from "./part1";
import { binaryToNumber } from "./utils";

test("Count Bits", expect => {
  const actual = binaryDiagnostic([
    "00100",
    "11110",
    "10110",
    "10111",
    "10101",
    "01111",
    "00111",
    "11100",
    "10000",
    "11001",
    "00010",
    "01010",
  ]);
  expect.is(actual, 198);
});

test("Convert bits to number", expect => {
  expect.is(binaryToNumber("0"), 0);
  expect.is(binaryToNumber("1"), 1);
  expect.is(binaryToNumber("10"), 2);
  expect.is(binaryToNumber("11"), 3);
  expect.is(binaryToNumber("1010"), 10);
});
