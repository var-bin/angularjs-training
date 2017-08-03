// demo.ts

"use strict";

interface Opponent {
  alias: string;
  health: number;
}

class ComicBookCharacter {
  // by default all class properties have public access
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

let storm = new ComicBookCharacter();
storm.alias = "Storm";
storm.health = 100;
storm.strength = 100;
storm.secretIdentity = "Ororo Munroe";

let theBlob = new ComicBookCharacter();
theBlob.alias = "The Blob";
theBlob.health = 1000;
theBlob.strength = 5000;
theBlob.secretIdentity = "Fred J. Dukes";

storm.attackFunc(theBlob, storm.strength);
