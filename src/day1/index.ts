import path from "path";
import fs from "fs";
import { sonarSweep, sonarSweep2 } from "./sonar";


console.log(`Reading input ${path.join(__dirname, "input.txt")}`);
const input = fs.readFileSync(path.join(__dirname, "input.txt"))
  .toString("utf8")
  .split("\n")
  .map(n => parseInt(n.trim()));

console.log(input);

console.log(`Part 1: ${sonarSweep(input)}`);
console.log(`Part 2: ${sonarSweep2(input)}`);
