import path from "path";
import fs from "fs";
import { countOverlap } from "./part1";
import { countOverlap as countOverlap2 } from "./part2";

const input = fs.readFileSync(path.join(__dirname, "input.txt"))
  .toString("utf8");
 
console.log(`Part1: ${countOverlap(input)}`);
console.log(`Part2: ${countOverlap2(input)}`);
