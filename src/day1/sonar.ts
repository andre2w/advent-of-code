export function sonarSweep(input: number[]): number {
  let result = 0;
  let previousDepth: number | undefined;

  for (const currentDepth of input) {
    if (previousDepth != null && currentDepth > previousDepth) {
      result++
    }
    previousDepth = currentDepth;
  }

  return result;
}

export function sonarSweep2(input: number[]): number {
  let result: number[] = [];

  for (let i = 2; i < input.length; i++) {
    result.push(input[i-2] + input[i-1] + input[i]);
  }

  return sonarSweep(result);
}
