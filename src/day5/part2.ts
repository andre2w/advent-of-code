import { parseInput, expandLine  } from "./utils";

export function countOverlap(input: string): number {
  const positions = parseInput(input)
    .flatMap(line => expandLine(line));

  const positionCounter = new Map<string, number>();

  for (const position of positions) {
    const pos = `${position.x}-${position.y}`;
    positionCounter.set(pos, (positionCounter.get(pos) ?? 0) + 1);
  }

  let result = 0;
  for (const value of positionCounter.values()) {
    if (value > 1) result++;
  }

  return result;
}
