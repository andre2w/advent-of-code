import test from "ava";
import { bingo, parse, checkForWin, calculateScore } from "./part1";

const fileInput = `7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1

22 13 17 11  0
 8  2 23  4 24
21  9 14 16  7
 6 10  3 18  5
 1 12 20 15 19

 3 15  0  2 22
 9 18 13 17  5
19  8  7 25 23
20 11 10 24  4
14 21 16 12  6

14 21 17 24  4
10 16 15  9 19
18  8 23 26 20
22 11 13  6  5
 2  0 12  3  7
`;

test("Bingo game calculate the score of missing number in the winner board", expect => {
  expect.is(bingo(fileInput), 4512);
});

test("Parse called numbers and boards", expect => {
  const called = [7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1];
  const boards = [
    [[22, 13, 17, 11,  0],
     [ 8,  2, 23,  4, 24],
     [21,  9, 14, 16,  7],
     [ 6, 10,  3, 18,  5],
     [ 1, 12, 20, 15, 19]],

    [[ 3, 15,  0,  2, 22],
     [ 9, 18, 13, 17,  5],
     [19,  8,  7, 25, 23],
     [20, 11, 10, 24,  4],
     [14, 21, 16, 12,  6]],

    [[14, 21, 17, 24,  4],
     [10, 16, 15,  9, 19],
     [18,  8, 23, 26, 20],
     [22, 11, 13,  6,  5],
     [ 2,  0, 12,  3,  7]]   
  ];

  expect.deepEqual(parse(fileInput), { called, boards });
});


test("Test for winning column", expect => {
  const board =     
    [[22, 13, 17, 11,  0],
     [ 8,  2, 23,  4, 24],
     [21,  9, 14, 16,  7],
     [ 6, 10,  3, 18,  5],
     [ 1, 12, 20, 15, 19]];

  const calledNumbers = new Set([22, 8, 21, 6, 1]); 

  expect.true(checkForWin(board, calledNumbers));
});

test("Test another winning column", expect => {
  const board =     
    [[22, 13, 17, 11,  0],
     [ 8,  2, 23,  4, 24],
     [21,  9, 14, 16,  7],
     [ 6, 10,  3, 18,  5],
     [ 1, 12, 20, 15, 19]];

  const calledNumbers = new Set([11, 4, 16, 18, 15]); 

  expect.true(checkForWin(board, calledNumbers));
});

test("Test when there is no winning column", expect => {
  const board =     
    [[22, 13, 17, 11,  0],
     [ 8,  2, 23,  4, 24],
     [21,  9, 14, 16,  7],
     [ 6, 10,  3, 18,  5],
     [ 1, 12, 20, 15, 19]];

  const calledNumbers = new Set([11, 4, 16, 18, 19, 20 , 1]); 

  expect.false(checkForWin(board, calledNumbers));
});

test("Test when there is a winning row", expect => {
  const board =     
    [[22, 13, 17, 11,  0],
     [ 8,  2, 23,  4, 24],
     [21,  9, 14, 16,  7],
     [ 6, 10,  3, 18,  5],
     [ 1, 12, 20, 15, 19]];

  const calledNumbers = new Set([22, 13, 17, 11, 0]); 

  expect.true(checkForWin(board, calledNumbers));
});

test("Test when there is another winning row", expect => {
  const board =     
    [[22, 13, 17, 11,  0],
     [ 8,  2, 23,  4, 24],
     [21,  9, 14, 16,  7],
     [ 6, 10,  3, 18,  5],
     [ 1, 12, 20, 15, 19]];

  const calledNumbers = new Set([8, 2, 23, 4, 21, 9, 24]); 

  expect.true(checkForWin(board, calledNumbers));
});

test("Test when there is no winning row", expect => {
  const board =     
    [[22, 13, 17, 11,  0],
     [ 8,  2, 23,  4, 24],
     [21,  9, 14, 16,  7],
     [ 6, 10,  3, 18,  5],
     [ 1, 12, 20, 15, 19]];

  const calledNumbers = new Set([58, 22, 23, 4, 21, 9, 24]); 

  expect.false(checkForWin(board, calledNumbers));
});


test("sum numbers that were not called", expect => {
  const board = 
    [[14, 21, 17, 24,  4],
     [10, 16, 15,  9, 19],
     [18,  8, 23, 26, 20],
     [22, 11, 13,  6,  5],
     [ 2,  0, 12 , 3,  7]];

  const calledNumbers = new Set([14, 21, 17, 24, 4, 9, 23, 11, 2, 0, 5, 7]);
  const lastCalledNumber = 24;

  expect.is(calculateScore(board, calledNumbers, lastCalledNumber), 4512);
});
