export type Position = Record<"x" | "y", number>;

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
  if (line.start.x === line.end.x || line.start.y === line.end.y) {
    return expandLineHorizontal(line);
  }
  return expandLineDiagonal(line);
}

function expandLineDiagonal(line: Line): Position[] {
   const diff = Math.abs(line.end.x - line.start.x);

  const vertDirection = line.start.y > line.end.y ? "up" : "down";
  const horizontalDirection = line.start.x > line.end.x ? "left" : "right";

  const result: Position[] = [];
  for (let i = 0; i <= diff; i++) {
    result.push({ 
      x: horizontalDirection === "left" ? line.start.x - i : line.start.x + i, 
      y: vertDirection === "up" ? line.start.y - i : line.start.y + i
    });
  }
  
  return result; 
}

function expandLineHorizontal(line: Line): Position[] {
  let moving: keyof Position;
  let anchored: keyof Position;

  if (line.start.y === line.end.y) {
    moving = "x";
    anchored = "y";
  } else {
    moving = "y";
    anchored = "x";
  }

  const start = Math.min(line.start[moving], line.end[moving]);
  const end = Math.max(line.start[moving], line.end[moving]);

  const result: Position[] = [];

  for (let i = start; i <= end; i++) {
    result.push({ [moving]: i, [anchored]: line.start[anchored] } as Position);
  }

  return result;
}

export function countOverlap(positions: Position[]): number {
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
