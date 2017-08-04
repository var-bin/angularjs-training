// demo.ts

"use strict";

function pushSomethingIntoCollection(something, collection) {
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
