import fs from "fs";
import path from "path";
import { binaryDiagnostic } from "./part1";
import { binaryDiagnostic as part2Diagnostic } from "./part2";

const input = fs.readFileSync(path.join(__dirname, "input.txt"))
  .toString("utf8")
  .split("\n");
 

console.log(`1: Binary Diagnostic ${binaryDiagnostic(input)}`);
console.log(`2: Binary Diagnostic ${part2Diagnostic(input)}`);
