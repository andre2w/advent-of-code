import test from "ava";
import { oxygenRating, co2Rating, binaryDiagnostic } from "./part2";

const input = [
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
];

test("Binary Diagnostic calculates the Oxygen and CO2 rating", expect => {
  expect.is(binaryDiagnostic(input), 230);
});

test("Oxygen rating should be the number with most ocurrences", expect => {
  expect.is(oxygenRating(input), "10111");
});

test("CO2 rating should be the number with least ocurrences", expect => {
  expect.is(co2Rating(input), "01010");
});
