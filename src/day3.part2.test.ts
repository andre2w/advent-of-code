import test from "ava";
import { binaryDiagnostic } from "./part2";

test("Binary Diagnostic calculates the Oxygen and CO2 rating", expect => {
  const input = [
    "11110", "10110", "10111", "10101", "11100", "10000", "11001"
  ];

  expect.is(binaryDiagnostic(input), 230);
});
