// prototypalInheritance.js

"use strict";

let parent = {
  value: "parentValue",
  obj: {
    objValue: "parentObjValue"
  },
  walk: () => {
    console.log("walking");
  }
};

let child = Object.create(parent);

console.log("CHILD - child.value: ", child.value);
console.log("CHILD - child.obj.objValue: ", child.obj.objValue);
console.log("PARENT - parent.value: ", parent.value);
console.log("PARENT - parent.obj.objValue: ", parent.obj.objValue);
console.log("parent: ", parent);
console.log("child: ", child);

child.value = "childValue";
child.obj.objValue = "childObjValue";

console.log("*** CHANGED CHILD - child.value = 'childValue'");
console.log("*** CHANGED CHILD - child.obj.objValue: 'childObjValue'");
console.log("CHILD - child.obj.objValue: ", child.obj.objValue);
console.log("PARENT - parent.value: ", parent.value);
console.log("PARENT - parent.obj.objValue: ", parent.obj.objValue);
console.log("parent: ", parent);
console.log("child: ", child);
