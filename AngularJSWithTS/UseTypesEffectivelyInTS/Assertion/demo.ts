// demo.ts

"use strict";

interface SuperHero {
  powers: string[];
  savesTheDay: () => void;
}

let dazzler: SuperHero = {
  powers: ["transduces sonic vibrations into light"],
  savesTheDay() {
    console.log(`Dazzler ${this.powers} to save the day!!!`);
  }
};

interface BadGuy {
  badDeeds: string[];
  getRandomBadDeed: () => string;
  commitBadDeed: () => void;
}

let badGuy: BadGuy = {
  badDeeds: [
    "farts on old folks",
    "doesn't picks up his dog's poop",
    "steals from babies"
  ],
  getRandomBadDeed() {
    return this.badDeeds[Math.floor(Math.random() * this.badDeeds.length)];
  },
  commitBadDeed() {
    console.log(`BadGuy ${this.getRandomBadDeed()}`);
  }
};

function saveDayOrBadDeed(something: SuperHero | BadGuy) {
  /**
   * Something doesn't have powers. This is because the compiler is evaluating
   * both types of the union-type argument. Since the bad guy doesn't have powers,
   * something doesn't have powers. We can get a hold of the superhero's
   * power's property by asserting that something is a superhero.
   */
  /* if (something.powers) {

  } */
}
