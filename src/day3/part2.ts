import { binaryToNumber } from "./utils"; 

export function binaryDiagnostic(input: string[]): number {
  return binaryToNumber(oxygenRating(input)) * binaryToNumber(co2Rating(input));
}

export function oxygenRating(input: string[]): string {
  let inputs = input;
  let index = 0;
  while (true) {
    let values: { [k in number]: string[] } = { 0: [], 1: [] };

    for (const binary of inputs) {
      try {
        if (binary[index] === "1" || binary[index] === "0") {
          values[parseInt(binary[index])].push(binary);
        }
      } catch (err) {
        console.log({ index, binary, err });
      }
      
    }

    if (values[1].length === 1) {
      return values[1][0];
    }

    if (values[0].length > values[1].length) {
      inputs = values[0];
    } else {
      inputs = values[1];
    }
    index++;
  }
}

export function co2Rating(input: string[]): string {
  let inputs = input;
  let index = 0;
  while (true) {
    let values: { [k in number]: string[] } = { 0: [], 1: [] };

    for (const binary of inputs) {
      try {
        if (binary[index] === "1" || binary[index] === "0") {
          values[parseInt(binary[index])].push(binary);
        }
      } catch (err) {
        console.log({ index, binary, err });
      }
    }

    if (values[0].length === 1) {
      return values[0][0];
    }

    if (values[1].length < values[0].length) {
      inputs = values[1];
    } else {
      inputs = values[0];
    }
    index++;
  }
}
