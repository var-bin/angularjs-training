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
