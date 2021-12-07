import { binaryToNumber } from "./utils";

interface BitCounter {
  [k: number]: number;
}

export function binaryDiagnostic(input: string[]): number {
  const bitCounters: BitCounter[] = [];

  input.forEach(line => {
    for (let i = 0; i < line.length; i++) {
      if (bitCounters[i] == null) {
        bitCounters[i] = { 0: 0, 1: 0 };
      }

      bitCounters[i][parseInt(line[i])]++;
    }
  });

  const gammaRate = binaryToNumber(bitCounters
    .map(bitCounter =>  bitCounter[0] > bitCounter[1] ? "0" : "1")
    .join(""));
  const epsilonRate = binaryToNumber(bitCounters
    .map(bitCounter => bitCounter[0] < bitCounter[1] ? "0" : "1")
    .join(""));

  return gammaRate * epsilonRate;
}


