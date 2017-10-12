// sum.ts

"use strict"

function sum(a: number, b: number): number {
  if (!a || !b) {
    return -1;
  }

  return a + b;
}

export { sum };
