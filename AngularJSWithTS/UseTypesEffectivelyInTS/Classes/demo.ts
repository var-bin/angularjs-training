// demo.ts

"use strict";

interface Opponent {
  alias: string;
  health: number;
}

class ComicBookCharacter {
  alias: string;
  health: number;
  strength: number;
  secretIdentity: string;

  attackFunc(opponent: Opponent, attackWith: number) {
    opponent.health -= attackWith;

    console.log(`${this.alias} attacked ${opponent.alias}, who's health = ${opponent.health}`);

    return opponent.health;
  }
}
