import test from "ava";
import { sonarSweep2 } from "./sonar";

test("sliding window", expect => {
  expect.is(sonarSweep2([1, 2, 3, 4, 3]), 2);
  //1,2,3 = 6
  //2,3,4 = 9
  //3,4,3 = 10
});
