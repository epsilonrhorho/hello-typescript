import assert from "node:assert/strict";
import test from "node:test";

import { helloWorld } from "./index.js";

test("helloWorld returns a greeting with the provided name", () => {
  assert.equal(helloWorld("Stefan"), "Hello, Stefan!");
});
