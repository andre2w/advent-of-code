export function bingo(input: string): number {
  const { boards, called } = parse(input);

  const calledNumbers = new Set<number>();

  for (const num of called) {
    calledNumbers.add(num);
    for (const board of boards) {
      if (checkForWin(board, calledNumbers)) {
        return calculateScore(board, calledNumbers, num);
      } 
    }
  }

  throw Error("No winners in this game");
}

export interface Input {
  called: number[];
  boards: number[][][];
};


export function parse(input: string): Input {
  const lines = input.split("\n");

  const calledNumbers = lines.shift()!;

  const called = calledNumbers.split(",")
    .map(number => parseInt(number.trim()));


  const boards: number[][][] = [];
  let board: number[][] | undefined = undefined;

  for (const line of lines) {
    if (isEmptyLine(line)) {
      if (board != null) {
        boards.push(board);
      }
      board = [];
      continue;
    }

    const parsedLine = toNumberArray(line); 
    board?.push(parsedLine);
  }

  return { called, boards };
}

function isEmptyLine(line: string): boolean {
  return line.trim() === "";
}

function toNumberArray(line: string): number[] {
    return line.split(" ")
      .map(number => parseInt(number.trim()))
      .filter(number => Number.isInteger(number));
}

export function checkForWin(board: number[][], calledNumbers: Set<number>): boolean {
  
  for (let col = 0; col < board.length; col++) {
    let isWinning = true;
    for (let row = 0; row < board[col].length; row++) {
      isWinning = isWinning && calledNumbers.has(board[row][col]);
    }

    if (isWinning) return true;
  }

  for (let row = 0; row < board.length; row++) {
    let isWinning = true;
    for (let col = 0; col < board[row].length; col++) {
      isWinning = isWinning && calledNumbers.has(board[row][col]);
    }

    if (isWinning) return true;
  }  

  return false;
}

export function calculateScore(board: number[][], calledNumbers: Set<number>, lastCalledNumber: number): number {
  const totalUnmarked = board.reduce(
    (total, row) => total + row.reduce((rowTotal, num) => calledNumbers.has(num) ? rowTotal : rowTotal + num, 0), 
    0
  );

  return totalUnmarked * lastCalledNumber;
}
