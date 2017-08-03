// demo.ts

import { SuperHero } from "./SuperHero";
import { SuperVillain } from "./SuperVillain";

let jubilee = new SuperHero("Jubilee", 23, 233, "Jubilation Lee");
let scarletWitch = new SuperVillain("Scarlet Witch", 233, 4444, "Wanda Maximoff");

console.dir(jubilee);
console.log("/*----------------------------------*/");
console.dir(scarletWitch);

scarletWitch.getSecretId();
