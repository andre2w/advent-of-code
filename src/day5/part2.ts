import { parseInput, expandLine, countOverlap as countOverlappingPositions  } from "./utils";

export function countOverlap(input: string): number {
  const positions = parseInput(input)
    .flatMap(line => expandLine(line));

  return countOverlappingPositions(positions);
}
