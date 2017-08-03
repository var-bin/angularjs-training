// demo.ts

"use strict";

// superHeroName doesn't make sense for a superVillain.
// The Interface will help us to solve this issue

/* let superHero: {
  secretIdentity: string;
  superHeroName: string;
  health: number;
};

let superVillain: {
  secretIdentity: string;
  superHeroName: string;
  health: number;
}; */

interface AttackFunction {
  // types for AttackFunction arguments and return type
  (opponent: {
    alias: string;
    health: number;
  },

  attackWith: number
  ): number;
}

interface ComicBookCharacter {
  secretIdentity?: string;
  alias: string;
  health: number;
}

let superHero: ComicBookCharacter = {
  alias: "She-Hulk",
  health: 5000
};

let superVillain: ComicBookCharacter = {
  secretIdentity: "Jack Napier",
  alias: "Joker",
  health: 75
};

function getSecretIdentity(character: ComicBookCharacter) {
  if (character.secretIdentity) {
    console.log(`${character.alias} is ${character.secretIdentity}`);
  } else {
    console.log(`${character.alias} has no secret identity`);
  }
}

getSecretIdentity(superHero);
