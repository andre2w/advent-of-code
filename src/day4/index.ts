import fs from "fs";
import path from "path";
import { bingo } from "./part1";
import { bingo as bingo2 } from "./part2";

const input = fs.readFileSync(path.join(__dirname, "input.txt"))
  .toString("utf8");
 

console.log(`1: bingo ${bingo(input)}`);
console.log(`2: bingo ${bingo2(input)}`);
