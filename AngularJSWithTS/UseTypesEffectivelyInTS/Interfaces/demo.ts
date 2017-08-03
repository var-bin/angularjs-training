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

interface ComicBookCharacter {
  secretIdentity: string;
  alias: string;
  health: number;
}

let superHero: ComicBookCharacter;
let superVillain: ComicBookCharacter;
