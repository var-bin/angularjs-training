// obj.test.ts

"use strict";

import { data } from "./obj";

test("The data object should contain at least {one: 1, two: 2}", () => {
  expect(data).toMatchSnapshot();
});
