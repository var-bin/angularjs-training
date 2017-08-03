// ComicBookCharacterDefault.ts

"use strict";

class ComicBookCharacterDefault {
  constructor(
    public alias: string,
    public health: number,
    public strength: number,
    private secretIdentity: string
  ) {}
}

export { ComicBookCharacterDefault };
