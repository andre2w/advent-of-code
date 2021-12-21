import { calculateScore, checkForWin, parse } from "./utils";

export function bingo(input: string): number {
  const { boards, called } = parse(input);

  const calledNumbers = new Set<number>();
  const winningBoards: number[] = [];

  for (const num of called) {
    calledNumbers.add(num);
    for (let i = 0; i < boards.length; i++) {
      const board = boards[i];
      if (!winningBoards.includes(i) && checkForWin(board, calledNumbers)) {
        winningBoards.push(i);
        if (winningBoards.length === boards.length) {
          return calculateScore(board, calledNumbers, num);
        }
      } 
    }
  }
  
  throw new Error("Nobody won");
}
