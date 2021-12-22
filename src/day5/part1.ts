export function countOverlap(input: string): number {
  throw new Error();
}

export interface Position {
  x: number;
  y: number;
}

export interface Line {
  start: Position;
  end: Position;
}

export function parseInput(input: string): Line[] {
  return input.trim().split("\n") // Split the lines from the input file
    .map(line => line.replace(" -> ", ",")) // Turn the arrow into a comma 1,2 -> 3,4 to 1,2,3,4
    .map(line => line.split(",").map(num => parseInt(num.trim()))) 
    .map(line => ({ start: { x: line[0], y: line[1] }, end: { x: line[2], y: line[3] } }))
}

export function expandLine(line: Line): Position[] {
  if (line.start.y === line.end.y) {
    const start = Math.min(line.start.x);
    const end = Math.max(line.end.x);

    const result: Position[] = [];

    for (let i = start; i <= end; i++) {
      result.push({ x: i, y: line.start.y });
    }

    return result;

  } else {
    const start = Math.min(line.start.y);
    const end = Math.max(line.end.y);

    const result: Position[] = [];

    for (let i = start; i <= end; i++) {
      result.push({ x: line.start.x, y: i });
    }

    return result;
  }
}
