import fs from 'fs';
import path from 'path';
import { calculatePosition, calculateAimedPosition, CommandType } from "./dive";

const input = fs.readFileSync(path.join(__dirname, "input.txt"))
  .toString("utf8")
  .split("\n")
  .map(command => command.split(" "))
  .filter(command => command.length == 2)
  .map(command => ({ type: command[0] as CommandType, value: parseInt(command[1].trim())}) );

const position = calculatePosition(input);
console.log(`result: ${position.depth * position.distance}`);
const aimedPosition = calculateAimedPosition(input);
console.log(`result 2: ${aimedPosition.distance * aimedPosition.depth}`);
