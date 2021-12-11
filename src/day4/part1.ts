import { parse, checkForWin, calculateScore } from "./utils";

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

