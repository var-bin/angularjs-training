// SuperVillain.ts

import { ComicBookCharacterDefault } from "./ComicBookCharacterDefault";

class SuperVillain extends ComicBookCharacterDefault {
  flaws = [
    "hubris",
    "always explains evil plan"
  ];

  getSecretId() {
    console.log(this.secretIdentity);
  }

  constructor(a, b, c, d) {
    super(a, b, c, d);

    console.log(`${this.alias} eats kittens!!!`);
  }
}

export { SuperVillain };
