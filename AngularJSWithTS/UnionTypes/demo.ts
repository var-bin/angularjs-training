// demo.ts

"use strict";

type thing = string | number | string[] | boolean;

let returnSomeThing = (someThing: thing) => {
  if (typeof someThing === "string" ||
      typeof someThing === "number" ||
      typeof someThing === "boolean") {
    console.log("someThing = ", someThing);
  }

  if (someThing instanceof Array) {
    let joinedThings = "";

    someThing.forEach(thing => {
      joinedThings += ` ${thing}`;
    });

    console.log("joinedThings = ", joinedThings);
  }
};

returnSomeThing(12345);
returnSomeThing(["Wonder", "Woman", "Rocket", "Things"]);

// if union type objects with non-objects then
// the compiler will get mad
type stuff = string | { name: string };


let gimmeStuff = (stuff: stuff) => {
  typeof stuff === "string";
  // error
  typeof stuff.name === "string";
};

// if union type objects with different types then
// the compiler will get mad

type coolThings = { name: string; } | { id: number; };
let gimmeCollStuff = (thing: coolThings) => {
  // error
  if (typeof thing.name === "string") {
    return thing.name;
  }

  // error
  if (typeof thing.id === "number") {
    return thing.id;
  }
};

// if union type objects with common properties then
// the compiler will get access to the common properties

type stuffAndThings = { cool: string; meh: string; } |
                      { cool: string; lame: string; };

let gimmeStuffAndThings = (sat: stuffAndThings) => {
                    // error
  return sat.cool || sat.name;
};
