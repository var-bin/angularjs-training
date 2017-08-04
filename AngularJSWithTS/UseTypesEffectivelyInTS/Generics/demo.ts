// demo.ts

"use strict";

/**
 * We can use a generic to tell the compiler, we're going to be using a specific type,
 * but we're not going to tell you what that type is until the function is called.
 * This is what a generic looks like. It doesn't matter what's between the angle brackets,
 * as long as it makes sense to you.
 *
 * T which is short for type, is just the convention.
 * Now that the generic has been declared, we can use it to type our arguments.
 * Everything looks OK. Let's see what happens when we make an error.
 * They type argument for type parameter T, cannot be inferred from the usage.
 */
function pushSomethingIntoCollection<T>(something: T, collection: T[]) {
  collection.push(something);

  console.log(collection);
}


let jeanGrey = {
  name: "Jean Grey"
};

let wolverine = {
  name: "Wolverine"
};

let superHeroes = [jeanGrey];
let powers = ["telekinesis", "esp"];

interface SuperHeroes {
  name: string;
}

pushSomethingIntoCollection<SuperHeroes>(wolverine, superHeroes);
pushSomethingIntoCollection<string>("adamantium claws", powers);
