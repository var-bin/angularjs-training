// demo.ts

"use strict";

// The stringType variable can be set to any string
let unit: string = "awesome";

// The stringLiteralType can only be set to the type value
// as well as Null and Undefined, as of now
let miles: "MILES";
miles = null; // no error
miles = undefined; // no error
// miles = "awesome"; // error TS2322: Type '"awesome"' is not assignable to type '"MILES"'.
miles = "MILES"; // OK

/**
 * When I call the function, I can pass any number and any string.
 * When we run the compiler, no errors.
 * Instead, lets make a type alias using string literals and union types.
 */

type distanceMetric = "MILES" | "KILOMETERS" | "METERS" | "YARDS" | "FEET" | "INCHES";
function moveCharacter(distance: number, value: distanceMetric) {
  console.log(`You moved ${distance} ${value}`);
}

moveCharacter(3, "MILES");
